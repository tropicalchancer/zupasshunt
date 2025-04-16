import { createClient } from './supabase';
import { createHash } from 'crypto';

export async function signInWithZupass(pcdStr: string) {
  try {
    const supabase = createClient();
    
    // Try to parse the PCD string to get any available user info
    let pcdData;
    try {
      pcdData = JSON.parse(pcdStr);
      console.log('PCD Data:', pcdData);
    } catch (e) {
      console.error('Failed to parse PCD data:', e);
      throw new Error('Invalid PCD format');
    }

    // Extract email from PCD claim
    const email = pcdData?.claim?.partialTicket?.attendeeEmail;
    if (!email) {
      throw new Error('PCD missing attendeeEmail');
    }

    // Extract semaphore ID for user metadata
    const external_id = pcdData?.claim?.partialTicket?.attendeeSemaphoreId;
    
    // Use full hash for password
    const password = createHash('sha256')
      .update(pcdStr)
      .digest('hex');
    
    // Try to sign in first
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log('Sign in failed, attempting signup:', error.message);
      // If sign in fails, try to sign up
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            external_id
          }
        }
      });

      if (signUpError) {
        console.error('Signup failed:', signUpError);
        throw signUpError;
      }

      return signUpData;
    }

    // Update the metadata on successful sign in
    await supabase.auth.updateUser({
      data: {
        zupass_pcd: pcdStr,
        pcd_data: pcdData,
        last_login: new Date().toISOString(),
      }
    });

    return data;
  } catch (error) {
    console.error('Error in signInWithZupass:', error);
    throw error;
  }
} 
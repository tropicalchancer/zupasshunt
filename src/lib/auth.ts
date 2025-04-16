import { createClient } from './supabase';
import { createHash } from 'crypto';

function generateValidEmail(input: string): string {
  // Create a SHA-256 hash of the input and get first 12 characters
  // This ensures we get a consistent, valid string for the email
  const hash = createHash('sha256')
    .update(input)
    .digest('hex')
    .slice(0, 12);
  
  // Create a valid email with a shorter hash prefix
  return `user_${hash}@zupass.org`;
}

export async function signInWithZupass(pcdStr: string) {
  try {
    const supabase = createClient();
    
    // Try to parse the PCD string to get any available user info
    let pcdData;
    try {
      pcdData = JSON.parse(pcdStr);
      console.log('PCD Data:', pcdData);
    } catch (e) {
      console.log('Failed to parse PCD data:', e);
    }

    // Generate a stable email and password
    const email = generateValidEmail(pcdStr);
    console.log('Generated email:', email);
    
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
            zupass_pcd: pcdStr, // Store the full PCD as metadata
            pcd_data: pcdData, // Store the parsed PCD data if available
            last_login: new Date().toISOString(),
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
"use client";

import { useState, useEffect } from "react";
import { useZupassPopupMessages } from "@pcd/passport-interface/PassportPopup/react";
import { openZupassPopup } from "@pcd/passport-interface/PassportPopup/core";
import { constructZupassPcdGetRequestUrl } from "@pcd/passport-interface/PassportInterface";
import { ArgumentTypeName } from "@pcd/pcd-types";
import { SemaphoreGroupPCDTypeName } from "@pcd/semaphore-group-pcd/SemaphoreGroupPCD";
import { SemaphoreIdentityPCDTypeName } from "@pcd/semaphore-identity-pcd/SemaphoreIdentityPCD";
import { generateSnarkMessageHash } from "@pcd/util";

interface AuthProtectionProps {
  children: React.ReactNode;
}

export function AuthProtection({ children }: AuthProtectionProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pcdStr] = useZupassPopupMessages();
  const [error, setError] = useState<string | null>(null);

  // Process incoming proofs from popup
  useEffect(() => {
    if (!pcdStr) return;
    
    setIsVerifying(true);
    setError(null);
    
    try {
      if (pcdStr && typeof pcdStr === "string" && pcdStr.length > 0) {
        // Successfully received a proof
        setIsAuthenticated(true);
        localStorage.setItem("zupass-authenticated", "true");
      } else {
        setError("Invalid proof received");
      }
    } catch (err) {
      console.error("Error processing proof:", err);
      setError("Failed to process authentication");
    } finally {
      setIsVerifying(false);
    }
  }, [pcdStr]);

  const handleVerify = () => {
    setIsVerifying(true);
    setError(null);
    
    try {
      const ZUPASS_CLIENT_URL = "https://zupass.org";
      const ZUPASS_SERVER_URL = "https://api.zupass.org"; 
      const popupUrl = `${window.location.origin}/popup`;
      
      const ZUZALU_PARTICIPANTS_GROUP_URL = `${ZUPASS_SERVER_URL}/semaphore/1`;
      
      const proofUrl = constructZupassPcdGetRequestUrl(
        ZUPASS_CLIENT_URL,
        popupUrl,
        SemaphoreGroupPCDTypeName,
        {
          externalNullifier: {
            argumentType: ArgumentTypeName.BigInt,
            userProvided: false,
            value: generateSnarkMessageHash("zupasshunt").toString()
          },
          group: {
            argumentType: ArgumentTypeName.Object,
            userProvided: false,
            remoteUrl: ZUZALU_PARTICIPANTS_GROUP_URL
          },
          identity: {
            argumentType: ArgumentTypeName.PCD,
            pcdType: SemaphoreIdentityPCDTypeName,
            value: undefined,
            userProvided: true
          },
          signal: {
            argumentType: ArgumentTypeName.BigInt,
            userProvided: false,
            value: "1"
          }
        },
        {
          title: "VERIFY WITH ZUPASS",
          description: "Verify to see if you won!",
          requesterUrl: window.location.origin
        }
      );
      
      openZupassPopup(popupUrl, proofUrl);
      
    } catch (err) {
      console.error("Failed to open Zupass:", err);
      setError("Failed to connect to Zupass");
      setIsVerifying(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Verify with ZuPass</h1>
          <p className="text-gray-600">
            Click the button below to verify your credentials
          </p>
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <button 
            onClick={handleVerify} 
            disabled={isVerifying}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {isVerifying ? "Verifying..." : "Verify with ZuPass"}
          </button>
        </div>
      </div>
    );
  }

  return children;
} 
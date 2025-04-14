"use client";

import { useZupassPopupSetup } from "@pcd/passport-interface/PassportPopup/react";

export default function PopupPage() {
  // This hook handles all the popup logic
  const error = useZupassPopupSetup();
  
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-4">Authenticating with ZuPass</h1>
        <p className="text-gray-600">
          This window will close automatically once authentication is complete.
        </p>
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md mt-4">
            {error}
          </div>
        )}
      </div>
    </div>
  );
} 
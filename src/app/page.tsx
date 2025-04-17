"use client";

import { AuthProtection } from "@/components/auth/auth-protection";
import { AuthForm } from "@/components/auth/auth-form";

export default function HomePage() {
  return (
    <AuthProtection>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <AuthForm />
      </div>
    </AuthProtection>
  );
}

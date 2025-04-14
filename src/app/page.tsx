"use client";

import { AuthProtection } from "@/components/auth/auth-protection";

export default function HomePage() {
  return (
    <AuthProtection>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center space-y-8 p-8 bg-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            🎉 You Won! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Congratulations! You&apos;ve successfully verified your Zupass credentials.
          </p>
        </div>
      </div>
    </AuthProtection>
  );
}

"use client";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="text-center space-y-4 p-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-2xl font-bold text-red-600">Authentication Error</h1>
        <p className="text-gray-600">
          There was a problem with your authentication. Please try signing up again.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Return Home
        </button>
      </div>
    </div>
  );
} 
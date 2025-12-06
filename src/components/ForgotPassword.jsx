import React from 'react'
import  { useState } from "react";
import { Link } from "react-router-dom";
import ResetOtpModal from "./ResetOtpModal";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [showOtpModal, setShowOtpModal] = useState(false);

     const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset password for:", email);
    setShowOtpModal(true)
    // Later: call your backend API here

    setEmail("");
    // alert("If this email exists, a reset link will be sent.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 bg-white">
      <h1 className="text-3xl font-semibold mb-8">My Account</h1>

      {/* Card */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md px-8 py-10">
        <h2 className="text-xl font-semibold text-center mb-2">
          Forgot your password?
        </h2>

        <p className="text-sm text-gray-600 text-center mb-8">
          Enter your email address and we’ll send an OTP to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800 text-start">
              Email address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            Send OTP
          </button>
        </form>
    </div>
    {/* Back to login link */}
        <p className="text-center text-sm text-gray-700 mt-6">
          <Link to="/" className="text-amber-600 hover:underline">
             Back to Sign In
          </Link>
        </p>

        {showOtpModal && <ResetOtpModal onClose={() => setShowOtpModal(false)} />}
      </div>
    
  )
}

export default ForgotPassword

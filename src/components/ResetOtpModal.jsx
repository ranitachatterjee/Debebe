import React, { useState, useRef } from "react";

const ResetOtpModal = ({ onClose }) => {
  const [form, setForm] = useState({
    otp: ["", "", "", ""],
    password: "",
    retypePassword: ""
  });

  const [error, setError] = useState("");

  const inputRefs = useRef([]);

  // ------------ OTP input change handler ----------
  const handleOtpInput = (e) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const index = inputRefs.current.indexOf(e.target);

    const newOtp = [...form.otp];
    newOtp[index] = value;

    setForm((prev) => ({ ...prev, otp: newOtp }));

    if (value && index < form.otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // ------------ OTP key handling (backspace navigation) ----------
  const handleOtpKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target);

    if (
      !/^[0-9]$/.test(e.key) &&
      !["Backspace", "Delete", "Tab"].includes(e.key)
    ) {
      e.preventDefault();
      return;
    }

    if ((e.key === "Backspace" || e.key === "Delete") && index > 0) {
      const newOtp = [...form.otp];
      newOtp[index] = "";
      setForm((prev) => ({ ...prev, otp: newOtp }));
      inputRefs.current[index - 1].focus();
    }
  };

  // ------------ Generic handler for password fields ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ------------ Submit handler ----------
  const handleSubmit = () => {
    const otpValue = form.otp.join("");

    if (form.password !== form.retypePassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    console.log("OTP:", otpValue);
    console.log("New Password:", form.password);

    alert("Password reset successful!");
    console.log("Form:",form);
    onClose(); // closes modal
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-[350px] relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-2xl"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">Enter OTP</h2>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2 mb-6">
          {form.otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={handleOtpInput}
              onKeyDown={handleOtpKeyDown}
              className="w-12 h-12 border text-center rounded-lg text-xl shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          ))}
        </div>

        {/* New Password */}
        <input
          type="password"
          name="password"
          placeholder="New Password"
          className="w-full mb-4 px-3 py-2 ring-1 ring-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
          value={form.password}
          onChange={handleChange}
        />

        {/* Retype Password */}
        <input
          type="password"
          name="retypePassword"
          placeholder="Retype Password"
          className="w-full mb-2 px-3 py-2 ring-1 ring-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
          value={form.retypePassword}
          onChange={handleChange}
        />

        {/* Error message */}
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-amber-400 hover:bg-amber-500 text-white py-2.5 font-semibold rounded-lg shadow-md"
        >
          Reset Password →
        </button>
      </div>
    </div>
  );
};

export default ResetOtpModal;

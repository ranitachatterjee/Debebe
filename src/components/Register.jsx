//Below code is working

// import React, { useState } from "react";
// import Otp1 from "./Otp1";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone_no: "",
//     password: ""
//   });

//   const [showOtp, setShowOtp] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("FORM:", form);

//     setForm({
//       name: "",
//       email: "",
//       phone_no: "",
//       password: ""
//     });

//     setShowOtp(true);
//   };

//   return (
//     <div className="relative max-w-sm mx-auto">
//       {showOtp && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 shadow-lg w-[350px] relative">
//             <button
//               onClick={() => setShowOtp(false)}
//               className="absolute top-3 right-3 text-gray-600 text-2xl"
//             >
//               ×
//             </button>

//             <h2 className="text-xl font-semibold text-center mb-2">Enter OTP</h2>
//             <p className="text-sm text-gray-600 text-center mb-5">
//               We sent a 4-digit OTP to your email.
//             </p>

//             <Otp1 />
//           </div>
//         </div>
//       )}

//       {!showOtp && (
//         <>
//           <h4 className="text-xl font-semibold mb-[10.8px]">Create Account</h4>

//           <p className="text-sm text-gray-700 mb-[5.4px]">
//             Your personal data will be used to support your experience throughout
//             this website, manage access to your account, and for other purposes
//             described in our privacy policy.
//           </p>

//           <form onSubmit={handleSubmit}>
//             {/* name */}
//             <div className="mt-[20px] mb-5">
//               <label className="block mb-2.5 text-sm font-medium text-start">name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="Enter name"
//                 className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm 
//                 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-5">
//               <label className="block mb-2.5 text-sm font-medium text-start">Email address *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="name@example.com"
//                 className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm 
//                 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="mb-5">
//               <label className="block mb-2.5 text-sm font-medium text-start">Phone Number *</label>
//               <input
//                 type="tel"
//                 name="phone_no"
//                 value={form.phone_no}
//                 onChange={handleChange}
//                 placeholder="Enter phone number"
//                 className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm 
//                 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-5">
//               <label className="block mb-2.5 text-sm font-medium text-start">Password *</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="••••••••"
//                 className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm 
//                 focus:ring-2 focus:ring-amber-400 outline-none"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 
//               rounded-xl shadow-md transition-all"
//             >
//               Create Account →
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import Otp1 from "./Otp1";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "../lib/fetcher";
import { toast } from "react-toastify"; // 👈 import toast

const Register = ({ onGoToSignIn }) => {
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone_no: "",
    password: ""
  });

  const [showOtp, setShowOtp] = useState(false);

  const {
    mutate: signupUser,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: (formData) => {
      const payload = {
        name: formData.username,
        email: formData.email,
        phone_no: formData.phone_no,
        password: formData.password,
      };

      return postRequest({
        url: "/api/v1/users/signup",
        body: payload,
      });
    },

    // ===== SUCCESS =====
    onSuccess: (_, variables) => {
       setRegisteredEmail(variables.email);  
      toast.success("Account created successfully!"); // 🎉 show toast
     
      setShowOtp(true); // open OTP modal

      // clear form
      setForm({
        username: "",
        email: "",
        phone_no: "",
        password: "",
      });
    },

    // ===== ERROR =====
    onError: (err) => {
      console.error("Signup error:", err);
      toast.error(err?.response?.data?.message || "Signup failed!");
    },
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(form); // 🚀 triggers mutation
  };

  return (
    <div className="relative max-w-sm mx-auto">
      {/* OTP MODAL */}
      {showOtp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-lg w-[350px] relative">

            <button
              onClick={() => setShowOtp(false)}
              className="absolute top-3 right-3 text-gray-600 text-2xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold text-center mb-2">Enter OTP</h2>
            <p className="text-sm text-gray-600 text-center mb-5">
              We sent a 4-digit OTP to your email.
            </p>

            <Otp1 email={registeredEmail} onOtpSuccess={onGoToSignIn}/>
          </div>
        </div>
      )}

      {/* REGISTER FORM */}
      {!showOtp && (
        <>
          <h4 className="text-xl font-semibold mb-3">Create Account</h4>

          <p className="text-sm text-gray-700 mb-3">
            Your personal data will be used to support your experience.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-5">
              <label className="block mb-1 text-sm font-medium">Username *</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg text-start"
                placeholder="Enter username"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block mb-1 text-sm font-medium">Email address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg"
                placeholder="name@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-5">
              <label className="block mb-1 text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone_no"
                value={form.phone_no}
                onChange={handleChange}
                className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block mb-1 text-sm font-medium">Password *</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Backend error text */}
            {isError && (
              <p className="text-sm text-red-600 mb-2">
                {error?.response?.data?.message || "Something went wrong."}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-amber-400 text-white py-3 rounded-xl shadow-md 
              ${isLoading && "opacity-70 cursor-not-allowed"}`}
            >
              {isLoading ? "Creating Acfytytytcount..." : "Create Account →"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;


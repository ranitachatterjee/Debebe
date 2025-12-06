// import React, { useRef, useState } from "react";

// export default function Otp1({ onOtpSuccess }) {
//   const [otp, setOtp] = useState(Array(4).fill("")); // Array with 6 empty strings
//   const inputRefs = useRef([]); // Array of refs for each input field



//   const handleSubmitOtp = (e) => {
//     e.preventDefault();

//     const otpValue = otp.join(""); // Convert array → string

//     console.log("Entered OTP:", otpValue);
//     if (onOtpSuccess) {
//       onOtpSuccess(); // 👈 this switches tab to SignIn
//     }
//   };

//   const handleKeyDown = (e) => {
//     const index = inputRefs.current.indexOf(e.target);
//     // Allow only digits, Backspace, Delete, Tab, Meta
//     if (
//       !/^[0-9]$/.test(e.key) &&
//       !["Backspace", "Delete", "Tab"].includes(e.key) &&
//       !e.metaKey
//     ) {
//       e.preventDefault();
//       return;
//     }

//     // Handle Delete / Backspace
//     if (e.key === "Backspace" || e.key === "Delete") {
//       e.preventDefault();

//       // If current field has a value → clear it
//       if (otp[index]) {
//         const newOtp = [...otp];
//         newOtp[index] = "";
//         setOtp(newOtp);
//         return;
//       }

//       // If current field is empty → go to previous input
//       if (index > 0) {
//         inputRefs.current[index - 1].focus();

//         const newOtp = [...otp];
//         newOtp[index - 1] = "";
//         setOtp(newOtp);
//       }
//     }
//   };

//   const handleInput = (e) => {
//     const value = e.target.value;

//     // Allow only digits
//     if (!/^[0-9]?$/.test(value)) return;

//     const index = inputRefs.current.indexOf(e.target);

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Move to next input automatically
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleFocus = (e) => {
//     e.target.select();
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const text = e.clipboardData.getData("text");
//     if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
//       return;
//     }
//     const digits = text.split("");
//     setOtp(digits);
//   };

//   return (
//     <section className="bg-white py-10 dark:bg-dark">
//       <div className="container">
       
//         <form
//           id="otp-form"
//           onSubmit={handleSubmitOtp}
//           className="flex flex-col items-center gap-4"
//         >
         
//           <div className="flex gap-2">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={handleInput}
//                 onKeyDown={handleKeyDown}
//                 onFocus={handleFocus}
//                 onPaste={handlePaste}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
//               />
//             ))}
//           </div>

       
//           <button
//             type="submit"
//             className="bg-amber-400 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-lg shadow-xs"
//           >
//             Submit OTP
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "../lib/fetcher";
import { toast } from "react-toastify";

export default function Otp1({ email, onOtpSuccess }) {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  // ========== MUTATION FOR OTP VERIFICATION ==========
  const { mutate: verifyOtp, isLoading } = useMutation({
    mutationFn: (payload) => {
      return postRequest({
        url: "/api/v1/users/verify-otp", // 👈 endpoint
        body: payload,
      });
    },

    onSuccess: (data) => {
      console.log("OTP Verified:", data);
      toast.success("OTP Verified Successfully!");
      if (onOtpSuccess) onOtpSuccess(); // Switch to SignIn tab
    },

    onError: (err) => {
      console.error("OTP Error:", err);
      toast.error(err?.response?.data?.message || "Invalid OTP, try again!");
    },
  });

  // ========== HANDLE OTP SUBMIT ==========
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 4) {
      toast.error("Please enter 4 digit OTP");
      return;
    }

    verifyOtp({
      otp: otpValue,
      email: email, // 👈 send email with OTP
    });
  };

  // ========== OTP INPUT HANDLING ==========
  const handleInput = (e) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const index = inputRefs.current.indexOf(e.target);
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <form onSubmit={handleSubmitOtp} className="flex flex-col items-center gap-4">

      {/* OTP INPUT BOXES */}
      <div className="flex gap-2">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            maxLength={1}
            value={digit}
            onChange={handleInput}
            ref={(el) => (inputRefs.current[idx] = el)}
            className="shadow-xs w-[60px] text-center text-2xl border rounded-lg py-2"
          />
        ))}
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isLoading}
        className={`bg-amber-400 hover:bg-amber-500 text-white font-medium px-4 py-2 rounded-lg shadow-md
        ${isLoading && "opacity-60 cursor-not-allowed"}`}
      >
        {isLoading ? "Verifying OTP..." : "Submit OTP"}
      </button>
    </form>
  );
}

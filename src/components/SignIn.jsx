
// import React, { useState } from 'react'

// const SignIn = () => {
//   const [form, setForm] = useState({ name: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("form-",form);
//     setForm({name:"", password:""})
    
//   }

//   return (
//     <div>
//       <h1>Welcome Back</h1>
//       <p>Please sign in to access your full account</p>

//       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//         <div className="mb-5">
//           <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading text-start">
//             Your email
//           </label>
//           <input 
//             type="email" 
//             id="email" 
//             className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
//             placeholder="name@flowbite.com" 
//             name="name" 
//             required 
//             onChange={handleChange} value={form.name}
//           />
//         </div>

//         <div className="mb-5">
//           <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading text-start">
//             Your password
//           </label>
//           <input 
//             type="password" 
//             id="password" 
//             className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body " 
//             placeholder="••••••••" 
//             name="password" 
//             required 
//             onChange={handleChange} 
//             value={form.password}
//           />
//         </div>

//         <label htmlFor="remember" className="flex items-center mb-5">
//           <input 
//             id="remember" 
//             type="checkbox" 
//             className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft " 
//             required 
//           />
//           <p className="ms-2 text-sm font-medium text-heading select-none">
//             I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.
//           </p>
//         </label>

//           <button type="submit" className="text-white bg-amber-300 hover:bg-amber-900 rounded-2xl  bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form-", form);
    setForm({ name: "", password: "" });
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md px-8 py-10">

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-sm text-gray-600 text-center mb-8">
          Please sign in to access your full account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800 text-start">
              Username or email address *
            </label>
            <input
              type="email"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-800 text-start">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3 py-3 ring-1 ring-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-400 outline-none"
              required
            />
          </div>

          {/* Remember Me */}
          <label className="flex items-center gap-2 text-sm text-gray-700 select-none cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-300"
            />
            Remember me
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl shadow-md transition-all"
          >
            Sign In →
          </button>
        </form>

        {/* Forgot Password Link */}
       <p className="text-center text-sm text-gray-700 mt-6">
  <Link
    to="/forgot-password"
    className="text-amber-600 hover:underline border-b border-amber-400 pb-[2px]"
  >
    Lost your password?
  </Link>
      </p>

      </div>
    </div>
  );
};

export default SignIn;


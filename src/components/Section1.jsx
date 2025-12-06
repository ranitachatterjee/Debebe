

// import React from 'react'
// import baby1 from '../src/assets/b1.webp'
// import baby2 from '../src/assets/b2.webp'
// import baby3 from '../src/assets/b3.webp'
// import baby4 from '../src/assets/b4.webp'

// const Section1 = () => {
//   return (
//     <div className="w-full px-4">
      
//       {/* Heading Section */}
//       <div className='writing-container text-center mt-6'>
//         <h3 className='text-lg mb-2 tracking-wide'>DE BEBE</h3>
//         <h1 className='text-3xl font-bold tracking-wider'>Shop by Category</h1>
//       </div>

//       {/* Images Section */}
//       <div className='baby-images flex justify-between gap-6 mt-8'>

//         {/* Item 1 */}
//         <div className="flex flex-col">
//           <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer">
//             <img 
//               src={baby1} 
//               alt="baby1" 
//               className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" 
//             />
//           </div>
//           <h2 className="mt-2 text-left text-lg">Baby Boy</h2>
//         </div>

//         {/* Item 2 */}
//         <div className="flex flex-col">
//           <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer">
//             <img 
//               src={baby2} 
//               alt="baby2" 
//               className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" 
//             />
//           </div>
//           <h2 className="mt-2 text-left text-lg">Baby Girl</h2>
//         </div>

//         {/* Item 3 */}
//         <div className="flex flex-col">
//           <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer">
//             <img 
//               src={baby3} 
//               alt="baby3" 
//               className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" 
//             />
//           </div>
//           <h2 className="mt-2 text-left text-lg">Boys</h2>
//         </div>

//         {/* Item 4 */}
//         <div className="flex flex-col">
//           <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer">
//             <img 
//               src={baby4} 
//               alt="baby4" 
//               className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" 
//             />
//           </div>
//           <h2 className="mt-2 text-left text-lg">Girls</h2>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Section1

import React from 'react'
import baby1 from '../assets/b1.webp'
import baby2 from '../assets/b2.webp'
import baby3 from '../assets/b3.webp'
import baby4 from '../assets/b4.webp'

const Section1 = () => {
  return (
    <div className="w-full px-4">
      
      {/* Heading Section */}
      <div className='writing-container text-center mt-6'>
        <h3 className='text-lg mb-2 tracking-wide'>DE BEBE</h3>
        <h1 className='text-3xl font-bold tracking-wider'>Shop by Category</h1>
      </div>

      {/* Images Section */}
      <div className='baby-images flex justify-between gap-6 mt-8'>

        {/* Item 1 */}
        <div className="flex flex-col">
          <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer 
                          transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <img 
              src={baby1} 
              alt="baby1" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="mt-2 text-left text-lg">Baby Boy</h2>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col">
          <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer 
                          transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <img 
              src={baby2} 
              alt="baby2" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="mt-2 text-left text-lg">Baby Girl</h2>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col">
          <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer 
                          transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <img 
              src={baby3} 
              alt="baby3" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="mt-2 text-left text-lg">Boys</h2>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col">
          <div className="w-70 h-80 rounded-xl overflow-hidden shadow-md cursor-pointer 
                          transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
            <img 
              src={baby4} 
              alt="baby4" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h2 className="mt-2 text-left text-lg">Girls</h2>
        </div>

      </div>

    </div>
  )
}

export default Section1



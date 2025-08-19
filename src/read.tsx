// return (
//     <>

//       <div className="absolute inset-0 flex flex-col justify-center px-15 z-10">
//         <h1
//           className="font-bold text-6xl flex px-6 py-2"
//         >
//           The Programmer | C0d3r
//         </h1>
//         <p className="text-lg flex flex-col px-6 py-2">
//           Front-End Developer crafting high-performance, responsive, and user-friendly web
//           <br />applications using modern technologies
//         </p>

//         <div className="flex gap-4 mt-8 px-4">

//           <a
//             href="mailto:rahul.aa.2015@gmail.com"
//             aria-label="Hire me via email"
//             className="flex items-center gap-2 px-4 py-2 rounded-md font-medium shadow hover:shadow-md transition 
//              bg-black text-white dark:bg-white dark:text-black"
//           >
//             <Mail className="w-4 h-4" />
//             Hire me
//           </a>
//           <a
//             href="https://github.com/urhomeyrahul"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button
//               aria-label="GitHub"
//               className="p-2 rounded-md border border-neutral-700 
//                bg-white dark:bg-black 
//                hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
//             >
//               <img
//                 src="https://cdn.simpleicons.org/github/000000"
//                 alt="GitHub"
//                 className="h-6 w-6 dark:invert"
//               />
//             </button>
//           </a>

//           <a
//             href="https://linkedin.com/in/raggarwa24"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button
//               aria-label="LinkedIn"
//               className="p-2 rounded-md border border-neutral-700 
//                bg-white dark:bg-black 
//                hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
//             >
//               <img
//                 src="https://www.svgrepo.com/show/448234/linkedin.svg"
//                 alt="LinkedIn"
//                 className="h-6 w-6 dark:invert"
//               />
//             </button>
//           </a>

//         </div>

//       </div>

//       <div className="py-25">
//         <h1 className="font-bold text-5xl flex px-22 py-2">
//           Technology Stack
//         </h1>
//       </div>

//       <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden">
//         <div className="relative w-[80%] rounded-3xl overflow-hidden mb-25">
//           <ScrollVelocityContainer>
//             <ScrollVelocityRow baseVelocity={4} direction={1} className="py-1">
//               {IMAGES_ROW_A.map((item, idx) => (
//                 <div key={idx} className="flex flex-col items-center mx-4">
//                   <img
//                     src={`${item.src}&ixlib=rb-4.0.3`}
//                     alt={item.label}
//                     width={240}
//                     height={160}
//                     loading="lazy"
//                     decoding="async"
//                     className="h-10 w-15 rounded-md"
//                   />
//                   <span className="mt-1 text-sm text-center">{item.label}</span>
//                 </div>
//               ))}
//             </ScrollVelocityRow>

//             <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
//               {IMAGES_ROW_B.map((item, idx) => (
//                 <div key={idx} className="flex flex-col items-center mx-4 my-6">
//                   <img
//                     src={`${item.src}&ixlib=rb-4.0.3`}
//                     alt={item.label}
//                     width={240}
//                     height={160}
//                     loading="lazy"
//                     decoding="async"
//                     className="h-10 w-15 rounded-lg"
//                   />
//                   <span className="mt-1 text-sm text-center">{item.label}</span>
//                 </div>
//               ))}
//             </ScrollVelocityRow>

//             <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
//               {IMAGES_ROW_C.map((item, idx) => (
//                 <div key={idx} className="flex flex-col items-center mx-4">
//                   <img
//                     src={`${item.src}&ixlib=rb-4.0.3`}
//                     alt={item.label}
//                     width={240}
//                     height={160}
//                     loading="lazy"
//                     decoding="async"
//                     className="h-10 w-15 rounded-md"
//                   />
//                   <span className="mt-1 text-sm text-center">{item.label}</span>
//                 </div>
//               ))}
//             </ScrollVelocityRow>
//           </ScrollVelocityContainer>

//           <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
//         </div>
//       </div>

//     </>
//   );
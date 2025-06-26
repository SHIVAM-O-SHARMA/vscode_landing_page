import './App.css'
import imagelink  from './assets/images/pic.png'

import React from "react";

// function App() {
//   return (
//     <div className="font-sans text-gray-900">
//       {/* Navbar */}
//       <header className="bg-[#2c2c32] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="text-xl font-bold">Visual Studio Code</div>
//           <nav className="hidden md:flex space-x-6">
//             <a   href="#" className="hover:underline">Docs</a >
//             <a   href="#" className="hover:underline">Download</a >
//             <a   href="#" className="hover:underline">Blog</a >
//             <a   href="#" className="hover:underline">API</a >
//             <a   href="#" className="hover:underline">Extensions</a >
//           </nav>
//           <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold">Download</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-[#1e1e1e] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="mb-10 md:mb-0 md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Code editing. Redefined.</h1>
//             <p className="text-lg mb-6">
//               Free. Built on open source. Runs everywhere.
//             </p>
//             <div className="space-x-4">
//               <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold text-white">Download for Windows</button>
//               <a  className='hover:underline' href="#" className="underline text-sm">Other platforms</a >
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <img
//               src="https://code.visualstudio.com/assets/home/home-screenshot-win.png"
//               alt="VS Code Screenshot"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Features / CTA */}
//       <section className="py-16 px-4 bg-gray-100">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Meet IntelliSense, debugging, and Git built-in.</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             Visual Studio Code includes built-in support for JavaScript, TypeScript and Node.js and has a  rich ecosystem of extensions.
//           </p>
//           <a  className='hover:underline' href="#" className="text-blue-600 font-semibold underline">Explore Features →</a >
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#2c2c32] text-white py-10">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
//           <div className="mb-6 md:mb-0">
//             <h4 className="font-semibold mb-2">Visual Studio Code</h4>
//             <ul className="space-y-1 text-sm">
//               <li><a  className='hover:underline' href="#" className="hover:underline">Docs</a ></li>
//               <li><a  className='hover:underline' href="#" className="hover:underline">Updates</a ></li>
//               <li><a  className='hover:underline' href="#" className="hover:underline">Blog</a ></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2">Support</h4>
//             <ul className="space-y-1 text-sm">
//               <li><a  className='hover:underline' href="#" className="hover:underline">Stack Overflow</a ></li>
//               <li><a  className='hover:underline' href="#" className="hover:underline">GitHub Issues</a ></li>
//               <li><a  className='hover:underline' href="#" className="hover:underline">Twitter</a ></li>
//             </ul>
//           </div>
//         </div>
//         <div className="text-center text-xs text-gray-400 mt-6">© 2025 Microsoft</div>
//       </footer>
//     </div>
//   );
// }


//my code

function App(){
    return (
        <div className='min-w-[640px] w-full overflow-x-auto'>
            <header className='bg-[#0e1117]'>
            <title>Visual Studio Code</title>
                <div> 
                <div className=" px-4 py-3 flex items-center justify-between">
                    <div className='text-[#C5D0E2] text-[24px] p-3'>Visual Studio Code</div>
                    <nav className='text-[#6E707C] md:block hidden  space-x-6 size-17 text-[19px] translate-y-5.5 '>
                    <a  className='hover:underline' href="#">Docs</a>
                    <a  className='hover:underline' href="#">Updates</a>
                    <a  className='hover:underline' href="#">Blog</a>
                    <a  className='hover:underline' href="#">API</a>
                    <a  className='hover:underline' href="#">Extension</a>
                    <a  className='hover:underline' href="#">FAQ</a>
                    <a  className='hover:underline' href="#">GitHubCopilot</a>
                    </nav>
                    {/* <input type="text" className='text-[#C5D0E2] border border-[##C5D0E2] bg-[#0E1116] px-2 py-1 m-2 rounded'/> */}
                    <button className='text-[#C5D0E2] md:block hidden hover:bg-blue-600 bg-[#3476CD] rounded size-20'>Download</button>
                </div>
                </div>
            </header>
             <div className="bg-[#0b1525] border border-[#1a2333] text-white text-center py-3 px-4 text-sm md:text-base">
        Try <a href="#" className="underline text-blue-400 hover:text-blue-300">MCP servers</a> to extend agent mode in VS Code!
      </div>

      {/* main section */}
            <section className='bg-gradient-to-b from-[#0e1117] h-svh '>
                <h1 className='text-[#C5D0E2] font-bold  flex justify-center text-[70px]'> Your code editor.
                </h1><h1 className='text-[#C5D0E2] font-bold  flex justify-center text-[70px] -translate-y-2'> Redefined with AI.</h1>
         <div className='flex justify-center space-x-4'>
            <div>
            <button className='bg-[#3476CD] hover:bg-blue-500 w-54 h-14 rounded text-white text-[20px] hover:cursor-pointer'>Download for macOs</button>
            </div>
            <div>
            <button className='bg-[#26292E] hover:bg-gray-900 w-48 h-14 rounded border border-b-gray-400 text-gray-500 text-[20px] hover:cursor-pointer'>Try agent mode</button>
           </div>
            </div>
           <div className='text-white underline flex justify-center translate-y-2 text-[12px]'>
          <a className='text-blue-400' href="#">Web</a>, <a className='text-blue-400' href="#">Insider's edition</a>, or <a className='text-blue-400' href="#">other platforms</a>
          </div>
         <div className='p-10'>
            <img src={imagelink} alt="pic" className="w-full max-w-[1050px] mx-auto rounded-lg shadow-lg" />
         </div>
            </section>



        </div>
    )
}

export default App;
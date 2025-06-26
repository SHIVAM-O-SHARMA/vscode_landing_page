import './App.css'
import imagelink  from './assets/images/pic.png'
import React from "react";

function App(){
    return (
        <div>
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
               <main>
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
            <img src={imagelink} alt="pic" className="w-full max-w-[1200px] mx-auto rounded-lg shadow-lg" />
         </div>
            </section>

           <section></section>
          </main>

        </div>
    )
}

export default App;
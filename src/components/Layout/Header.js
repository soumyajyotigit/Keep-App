import React from "react";
import logo from "../../Images/logo.svg";
const Header = () => {
    return (
        <>
            <div className="w-full h-12 bg-amber-400 flex  items-center px-5">
                
                    <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                        <span className="text-3xl text-indigo-600 mr-1 pt-2 items-center">
                            <img src={logo} alt="logo" width="30" height="40" />
                        </span>
                        <h1 className="text-2xl text-white font-[Poppins] ">Keep Aplication</h1>
                    </div>
                
            </div>
        </>
    );
};
export default Header;

// import React from 'react'

// function Header() {
//   return (
//     <div className='w-full h-10 bg-amber-400 flex  items-center px-5'>
//       <div className="font-mono text-white">MyKeep</div>
//     </div>
//   )
// }

// export default Header;

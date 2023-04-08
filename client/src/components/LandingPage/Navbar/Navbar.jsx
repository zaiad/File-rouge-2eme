import { useState } from "react";
import {
  AiOutlineClose,
  AiFillApple,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";


function Navbar() {
  // const [showDropdownSearch, setShowDropdownSearch] = useState(false);
  const [side, setSide] = useState(false);

  // const handleToggleDropdown = () => {
  //   setShowDropdownSearch(!showDropdownSearch);
  // };

  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-4 bg-gray-200">
      {/* Left side */}
      <div className="flex items-center">
        <div  className="cursor-pointer">
          <AiFillApple size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-xl px-2">
          <span className="hidden lg:inline">Zaiad</span>
          <span className="font-bold hidden lg:inline">Market</span>
        </h1>
      </div>
      {/* Middle */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="flex">
          <li className="px-4 ">Store</li>
          <li className="px-4 ">Iphone</li>
          <li className="px-4 ">Mac</li>
          <li className="px-4 ">IPad</li>
        </ul>
      </div>

      {/* Search Input */}
      <div></div>
      {/* Card button*/}
      {/* Right side */}
      <div className="flex items-center justify-between">
        <button>
          <AiOutlineSearch
            size={30}
            color="gray"
            // onClick={handleToggleDropdown}
          />
          {/* {showDropdownSearch && (
            <div className="absolute left-0 bg-black w-full py-4 text-white ">
              <Input
                className="bg-transparent p-2 w-full focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          )} */}
        </button>
        <bu className="text-black md:flex items-center py-2 px-5 mr-10">
          <BsFillCartFill size={20} className="mr-2" />
          <span className="hidden lg:block cursor-pointer">Cart</span>
        </bu>

        <div className="block lg:hidden">
          <AiOutlineMenu onClick={() => setSide(!side)} size={30} />
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {side ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> */}
      {/* Side drawer menu */}
      <div
        className={
          side
            ? "fixed top-0 right-0 w-full h-68 bg-gray-100 z-10 duration-300"
            : "fixed top-0 right-[-100%] w-full h-68 bg-gray-100 z-10 duration-300"
        }
      >
        <AiOutlineClose
        onClick={()=> setSide(!side)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        {/* <h2 className="text-2xl p-4">zaiad <span className="font-bold">Market</span></h2> */}
        <div className="cursor-pointe p-4">
          <AiFillApple size={40} />
          <nav className="">
            <ul className="flex flex-col p-4">
              <li className="py-8 text-lg text-center font-medium p-2 w-full rounded-md hover:bg-gray-500 hover:text-gray-100">
                Store
              </li>
              <li className="py-8 text-lg text-center font-medium p-2 w-full rounded-md hover:bg-gray-500 hover:text-gray-100 ">
                Iphone
              </li>
              <li className="py-8 text-lg text-center font-medium p-2 w-full rounded-md hover:bg-gray-500 hover:text-gray-100">
                Mac
              </li>
              <li className="py-8 text-lg text-center font-medium p-2 w-full rounded-md hover:bg-gray-500 hover:text-gray-100">
                IPad
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// import { useState } from "react";
// import { AiFillApple } from "react-icons/ai";
// import { BsFillCartFill } from "react-icons/bs";
// import { TbTruckDelivery } from "react-icons/tb";
// import { Input } from "../../accessoires/Inputs/Input";

// function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleHover = () => {
//     setShowDropdown(true);
//   };

//   const handleLeave = () => {
//     setShowDropdown(false);
//   };

//   return (
//     <div className="max-w-[1640] mx-auto flex justify-between items-center p-4 bg-gray-200">
//       {/* Left side */}
//       <div className="flex items-center">
//         <div className="cursor-pointer">
//           <AiFillApple size={30} />
//         </div>
//         <h1 className="text-2xl sm:text-3xl lg:text-xl px-2">
//           Zaiad <span className="font-bold">Market</span>
//         </h1>
//       </div>

//       {/* Middle */}
//       <div className="hidden lg:flex lg:items-center">
//         <ul className="flex">
//           <li
//             className="px-4 cursor-pointer"
//             onMouseEnter={handleHover}
//             onMouseLeave={handleLeave}
//           >
//             Store
//             {showDropdown && (
//               <div className="absolute top-full left-0 bg-white w-full py-4 z-50">
//                 <ul className="px-4 grid grid-cols-3 gap-4">
//                   <li className="text-center">
//                     <TbTruckDelivery size={40} />
//                     <p className="text-sm font-medium mt-2">Delivery</p>
//                   </li>
//                   <li className="text-center">
//                     <AiFillApple size={40} />
//                     <p className="text-sm font-medium mt-2">iPhone</p>
//                   </li>
//                   <li className="text-center">
//                     <BsFillCartFill size={40} />
//                     <p className="text-sm font-medium mt-2">Shopping Bag</p>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </li>
//           <li className="px-4 ">Contact Us</li>
//           <li className="px-4 ">About Us</li>
//         </ul>
//       </div>

//       {/* Search Input */}
//       <div></div>

//       {/* Card button*/}
//       {/* Right side */}
//       <div className="flex items-center justify-between">
//         <Input type="text" placeholder="Search" />
//         <button className="bg-black text-white hidden md:flex items-center py-2 border border-black rounded-full px-5">
//           <BsFillCartFill size={20} className="mr-2" /> Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { useState } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import {TfiStatsUp} from "react-icons/tfi"
import { BiUserCircle, BiHomeAlt, BiLogOut } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgOrganisation } from "react-icons/cg";
import { Link } from "react-router-dom";


function Sidebar() {
    const navigate = useNavigate()


    const menus = [
        { name: "Home", link: "/", icon: BiHomeAlt },
        { name: "Statistique", link: "/statistique", icon: TfiStatsUp },
        { name: "Users", link: "/Employe", icon: BiUserCircle },
        { name: "Categories", link: "/Categories", icon: CgOrganisation },
        { name: "Product", link: "/Formation", icon: MdOutlineCategory },
    ]
    
    const [open, setOpen] = useState(true);
    

    const logout = async() => {
        axios.get('http://localhost:4000/api/auth/logout')
        .then(e => {
            // e.preventDefault()
            localStorage.clear()
            navigate('/Login')

        })
    }


return (
    <div className={`${open ? "w-72" : "w-16"} duration-500 bg-gray-50 min-h-screen text-gray-500 relative px-3 `}>
        <div className="flex justify-end py-3" style={{ height: '8vh' }}>
            <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
            />
        </div>

        <div className="relative flex flex-col gap-4 mt-4" style={{ height: '85vh' }}>
            {menus?.map((menu, i) => (
            <Link
                to={menu?.link}
                key={i}
                className={`${menu?.margin && "mt-5 absolute inset-x-0 bottom-0"} flex items-center text-sm gap-4 font-medium p-2 rounded-md hover:bg-gray-500 hover:text-gray-100`}>
                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}
                </h2>
            </Link>
            ))}

            <button
            type="button"
            onClick={logout}
            className="absolute inset-x-0 bottom-0 flex items-center text-sm gap-4 font-medium p-2 rounded-md hover:bg-gray-500 hover:text-gray-100">
            <div>{React.createElement(BiLogOut, { size: "25" })}</div>
            <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                logout
            </h2>
            </button>
        </div>
    </div>
);
}

export default Sidebar;

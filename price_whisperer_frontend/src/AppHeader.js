import React from "react";
import logo from "./logo.svg"
import { Link } from "react-router-dom"

function AppHeader() {
    return (
        <nav className={"bg-gray-700 flex justify-between items-center space-x-reverse"}>
            <div>
                <img src={logo} className={"h-20 ml-4"} alt={"Website Logo"}/>
            </div>
            <div>
                <input type={"text"} placeholder={"search PriceWhisperer"} className={" font-bold h-11 border-4 " +
                    "rounded-md bg-white md:w-96 focus:outline-none px-5 "}/>
                <button onClick={() => alert('Button clicked.')} className={"text-l font-bold" +
                    " mx-4 p-2 rounded-lg text-white hover:bg-gray-600"}>search</button>
            </div>
            <div className={""}>
                <ul className={"flex"}>
                    <li>
                        <Link className={"text-l font-bold flex text-white rounded-xl p-4 hover:bg-gray-600 ml-2 "}>
                            Login </Link>
                    </li>
                    <li>
                        <Link className={"text-l font-bold flex text-white rounded-xl p-4 hover:bg-gray-600 mr-4 ml-2"}>
                            Signout </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppHeader;
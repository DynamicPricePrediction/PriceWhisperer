import React from "react";
import logo from "./logo.svg"
import { Link } from "react-router-dom"

function AppHeader() {
    return (
        <nav className={"bg-gray-700 flex justify-between items-center space-x-reverse"}>
            <div>
                <img src={logo} className={"h-20 ml-4"} alt={"Website Logo"}/>
            </div>
            <div className={"flex items-center"}>
                <input type={"text"} placeholder={"search..."} className={"font-mysans h-11 border-4 " +
                    "rounded-md bg-white md:w-96 focus:outline-none px-5 "}/>
                    {/*search icon svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                         className="m-4 fill-white rounded p-1 bg-yellow-500  justify-center hover:fill-black scale-150">
                        <path
                            d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                    </svg>


                {/*<button onClick={() => alert('Button clicked.')} className={"text-l font-bold" +*/}
                {/*    " mx-4 p-2 rounded-lg text-white hover:bg-gray-600"}>search</button>*/}
            </div>
            <div className={"items-center"}>
                <ul className={"flex"}>
                    <li>
                        <Link className={"text-l font-bold flex text-white rounded-xl hover:bg-gray-600 ml-2 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                                 className={"m-4 fill-white rounded p-0.5 justify-center hover:bg-gray-600 scale-150"}>
                                <path
                                    d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={"text-l font-bold flex text-white rounded-xl hover:bg-gray-600 ml-2 "}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                                 className={"m-4 fill-white rounded p-0.5 justify-center hover:bg-gray-600 scale-150"}>
                                <path
                                    d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link className={"text-l font-bold flex text-white rounded-xl mr-4 ml-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                                 className={"m-4 fill-white rounded p-0.5 justify-center bg-red-400 hover:fill-black scale-150"}>
                                <path
                                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppHeader;
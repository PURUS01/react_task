import React, { useState } from "react";
import { FaBars, FaPhoneAlt, FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";


export default function Sidebar({children}) {
const[isOpen,setIsOpen]=useState(true);
const toggle=()=>setIsOpen(!isOpen)    
const menuItem=[
    {
        path:"/",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        path:"/contact",
        name:"Contact",
        icon:<FaPhoneAlt/>
    }
]


    return <>
    <div className="toolbar" >
            <Nav/>
    </div>
    <div className="contain">
        <div className="sidebar" style={window.innerWidth<768?{width:isOpen?"160px":"50px"}:{width:isOpen?"200px":"50px"}}>
            <div className="top_section">
                <h1 className="logo" style={{display:isOpen?"block":"none"}}>Logo</h1>
                <div className="bars" style={window.innerWidth < 768 ?{marginLeft:isOpen?"40px":"0px"}:{marginLeft:isOpen?"50px":"0px"}}>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} className="link" activeclassName="active" style={{borderRadius:isOpen?"":"30%"}}>
                        <div className="icon">{item.icon}</div>
                        <div className="link_text" style={{display:isOpen?"block":"none"}}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <div className="container-fluid h-100 w-100" style={window.innerWidth < 768 ? {marginLeft:isOpen?"160px":"50px"} : {marginLeft:isOpen?"200px":"50px"}}>
        <main style={window.innerWidth < 768 ? {marginTop:isOpen?"40%":"25%"} : {marginTop:isOpen?"10%":"10%"}}>
            {children}
        </main>
        </div>
    </div>
            
    </>
}
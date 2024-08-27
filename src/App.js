import React from "react";
import './index.css';
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";




export default function App(){

    return <>
    
    <BrowserRouter>
    <Sidebar>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Sidebar>
    </BrowserRouter>
    
    
    
    </>
}
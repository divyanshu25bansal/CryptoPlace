import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = () => {

  return (
    <div className="app">
        <Navbar />
        <Outlet/>
       {/* <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Crypto/:coinId" element={<coinPage/>}/>
       </Routes> */}
       <Footer/>

    </div>
  );
};

export default App;

import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";


function App() {

  useEffect(() => {

  },[]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/detail/:id" element={<Detail />} />
        <Route path="/home/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;

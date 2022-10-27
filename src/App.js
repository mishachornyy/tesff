import Menu from './component/Menu/Menu'
import './App.css';


import {Route, Routes} from "react-router-dom";
import Home from "./component/Home/home";

import Contact from "./component/Contact/Contact";

import React from "react";
import Application from "./component/Step1/Application";
import License from "./component/License/License";
import Administrative from "./component/Administrative/Administrative";
import Reports from "./component/Reports/Reports";
import Step2 from "./component/Step2/Step 2";
import Step3 from "./component/Step3/Step 3";
import Step4 from "./component/Step4/Step 4";
import Step5 from "./component/Step5/Step 5";



function App() {
  return (
    <>
      <Menu />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/License" element={<License />} />
        <Route path="/Administrative" element={<Administrative />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/License" element={<Reports />} />
        <Route path="/Application/step2" element={<Step2 />} />
        <Route path="/Application/step3" element={<Step3 />} />
        <Route path="/Application/step4" element={<Step4 />} />
        <Route path="/Application/step5" element={<Step5 />} />






      </Routes>



    </>
  );

}

export default App;



import React from "react";

import Footer from "../Footer/Footer";
import "./Administrative.css"

function Administrative() {
  return ( <> <div className="admin">

      <div className=" admin-text  flex-col   ">
        <div className='br'>
        <h1>Login</h1>
          <input type="user" pattern="" placeholder="Username"/>
          <input type="password" pattern="" placeholder="Password"/>
          <div className="btn ">
          <button
            className="login-btn  hover:bg-[#F2B75B]">
            Login
          </button>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default Administrative;

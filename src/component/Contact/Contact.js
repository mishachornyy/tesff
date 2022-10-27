import React from "react";
import "./Contact.css"
import Footer from "../Footer/Footer";
import phone from "../../assests/phone.png"
import fax from "../../assests/Fax.png"
function Contact() {
  return ( <>

      <div className="contact">

        <div className=" contact-text  flex-col   ">
          <h1>THANK YOU</h1>
          <h2>for visiting the Sisseton Wahpeton Tax & Revenue Department Website</h2>

          <div className="adress">
          <h1>You may contact us by mail at:</h1>
          <p>P.O.Box 776 Agency Village, SD 57262</p>

        </div>
          <h3>or</h3>
          <div className="contact-number ">

             <img src={phone} alt="phone " />
            Phone: (605)698-3541
          </div>
          <div className="contact-number">
            <img src={fax} alt="phone " />
            Fax: (605)742-1025
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;

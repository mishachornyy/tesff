import React from "react";
import "./Step 5.css"
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import "../Step4/All colors.css"

function Step5() {
  return (<>

      <div className="bg-[#839278] w-[100vw] h-[75.990vw]">
        <div className="bg pt-[4.167vw]">
          <div className="steps "></div>
        </div>


        <div className="step4 flex pt-[4.010vw] self-center">

          <div className=" step4-text flex flex-col  self-center w-[52.188vw] h-[60.052vw]  ">
            <div className='br-text h-[71.875vw]'>

              <h1 className="pt-[2.760vw]">Tax Identification Number<br></br>Registration Information:</h1>


                <div className="user  flex  flex-row pt-[1.667vw]">
                  <h1 className="mr-[5.9vw] pt-[0.4vw]">Username: *</h1>
                  <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[6.2vw] pt-[0.4vw]">Paasword: *</h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[2.5vw] pt-[0.4vw]">Confim Paasword: *</h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[2.25vw] pt-[0.4vw]">Paasword Question: </h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[3.05vw] pt-[0.4vw]">Paasword Answer: </h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[8.750vw] pt-[0.4vw]">Email:</h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>
              <div className="user  flex  flex-row pt-[1.667vw]">
                <h1 className="mr-[4.35vw] pt-[0.4vw]">Confirm Email:*</h1>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>

              <div className="text-info flex pt-[3.333vw]">
                BY YOUR ELECTRONIC SUBMISSION OF YOUR SWO BUSINESS LICENCE APPLICATION, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO THE FOLLOWING: I declare that I have examined this application and the information contained herein, and to the best of my knowledge and belief, it is true and correct. I hereby affirm that I am authorized as the owner, partner, corporate officer, agent or representative of the entity to sign and submit this document and enter into this consensual relationship with the Sisseton Wahpeton Oyate. I swear or affirm that I will comply with all SWO tribal laws, Federal and other laws applicable to my business and consent to the jurisdiction of the SWO Tribal Court and service of process in matters arising from the conduct of business.
              </div>
              <div className="indicate flex  flex-row pt-[32px]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="acept mr-[10.260vw]">By submitting, I agree that all info entered was done accurately & truthfully.</label>
                </div>
              </div>
              <div className="register-button ">
                <div className="back  ">
                  <Link to="/Application/step4">Back</Link>
                </div>
                <div className="next  hover:bg-[#F2B75B]">
                  <Link to="/Application/step5">Save</Link>
                </div>
              </div>



              </div>
              </div>
              </div>
      </div>



      <Footer />
    </>
  )
}

export default Step5;

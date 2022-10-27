import React from "react";
import "./Step 4.css"
import Footer from "../Footer/Footer";
import circle from "../../assests/circle.png";
import line from "../../assests/cyrcle-line.png";
import {Link} from "react-router-dom";
import "./All colors.css"

function Step4() {
  return (  <>

      <div className="stepp4 ">
         <div className="bg pt-[4.167vw]">
        <div className="steps4 "></div>
         </div>


        <div className="step4 flex pt-[4.010vw] self-center">

          <div className=" step4-text flex flex-col  self-center w-[52.19vw] h-[59.17vw]  ">
            <div className='br-text h-[71.875vw]'>

              <h1 className="pt-[2.760vw]">New Business Licence Info:</h1>
              <div className="license pt-[1.667vw]">
                If you are applying for are a new Business License and Tribal Tax ID number, <br></br>indicate the reason:
              </div>
              <div className="indicate flex  flex-row pt-[1.667vw]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="lake flex content-center mr-[0.625vw]">New Business located within the jurisdiction of the tribe (Indian Country within the Lake Traverse Reservation)</label>
                </div>
              </div>
              <div className="indicate flex  flex-row pt-[0.625vw]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="lake flex content-center mr-[0.625vw]">New Business entering the jurisdiction of the tribe (Indian Country within the Lake Traverse Reservation)</label>
                </div>
              </div>
              <div className="indicate flex  flex-row pt-[0.625vw]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="lake flex content-center mr-[0.625vw]">More than 50% change in ownership of a business, other rhan a corporation </label>
                </div>
              </div>
              <div className="indicate flex  flex-row pt-[0.6vw]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="lake flex content-center mr-[0.625vw]">Purchased Existing Business </label>
                </div>
              </div>

              <div className="prior  flex  flex-row pt-[3.490vw]">
                <h1 className="mr-[2.0vw]">Prior Owners <br></br>  Name: </h1>
                <input type="prior-input" pattern="" placeholder=""/>
                <h2 className="ml-[5.313vw] mr-[1.250vw]">Prior Owners <br></br>Adress:</h2>
                <input type="prior-input" pattern="" placeholder=""/>
              </div>

              <div className="register">
                <h6 > City : *</h6>
                <input  type="city" pattern="" placeholder=""/>
                <h6>State :  *</h6>
                <select name="state">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>
                <h6 >Zip Code :  *</h6>
                <input  type="zip-code" pattern="" placeholder=""/>

              </div>
              <div className="prior  flex  flex-row pt-[1.66vw]">
                <h1 className="mr-[4.9vw]">Current Tribal Tax ID number(s),<br></br>(other than business owned):  </h1>
                <input type="prior" pattern="" placeholder=""/>
              </div>
              <div className="member pt-[1.66vw]">
                <h5>Should any of these be cancelled:</h5>
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="member-text flex content-center">Yes</label>
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="member-text flex content-center">No</label>
              </div>
              <div className="prior  flex  flex-row pt-[1.66vw]">
                <h1 className="mr-[9.6vw]">Cansel Effective Date:  </h1>
                <input type="prior" pattern="" placeholder=""/>
              </div>
              <div className="license pt-[3.2vw]">
                Do you currently have a tax License <br></br>with any of the following jurisdictions:
              </div>

              <div className="indicate flex  flex-row pt-[32px]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[10.260vw]">South Dakota</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[10.260vw]">North Dakota</label>
                </div>
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[]">Other</label>
                </div>


              </div>
              <div className="register-button ">
                <div className="back  ">
                  <Link to="/Application/step3">Back</Link>
                </div>
                <div className="next  hover:bg-[#F2B75B]">
                  <Link to="/Application/step5">Next</Link>
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

export default Step4;

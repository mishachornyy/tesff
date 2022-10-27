import React from "react";
import "./Step 2.css"
import Footer from "../Footer/Footer";
import circle from "../../assests/circle.png";
import line from "../../assests/cyrcle-line.png";
import {Link} from "react-router-dom";
import yelow from "../../assests/line-yelow.png"

function Step2() {
  return ( <>

      <div className="step2">
        <div className="bg pt-[4.167vw]">
          <div className="steps2"></div>
        </div>
        <div className="step1">

          <div className=" step2-text  flex-col   ">
            <div className='br-text h-[1014px]'>
              <h1 className="h22">Owner/Partner Info:</h1>
              <div className="register">
                <h10>List all Owners, Partners or Officers:</h10>
              </div>
              <div className="register">
                <h6>Name:</h6>
                <input type="Name" pattern="" placeholder=""/>
                <h6>Title:</h6>
                <input type="title" pattern="" placeholder=""/>
              </div>
              <div className="register">
                <h6>Home Phone #:</h6>
                <input type="home" pattern="" placeholder=""/>
                <h6>Bisiness phone #:</h6>
                <input type="bisnes" pattern="" placeholder=""/>
              </div>
              <div className="register">
                <h6>Home Address: </h6>
                <input type="address" pattern="" placeholder=""/>
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
              <div className="top mt-[52px]">

              </div>
              <div className="register">
                <h6>Name:</h6>
                <input type="Name" pattern="" placeholder=""/>
                <h6>Title:</h6>
                <input type="title" pattern="" placeholder=""/>
              </div>
              <div className="register">
                <h6>Home Phone #:</h6>
                <input type="home" pattern="" placeholder=""/>
                <h6>Bisiness phone #:</h6>
                <input type="bisnes" pattern="" placeholder=""/>
              </div>
              <div className="register">
                <h6>Home Address: </h6>
                <input type="address" pattern="" placeholder=""/>
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


              <div className="register-button ">
                <div className="back  ">
                  <Link to="/Application">Back</Link>
                </div>
                <div className="next  hover:bg-[#F2B75B]">
                  <Link to="/Application/step3">Next</Link>
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

export default Step2;

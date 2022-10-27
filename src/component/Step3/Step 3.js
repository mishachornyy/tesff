import React from "react";
import "./Step.3.css"
import Footer from "../Footer/Footer";
import {Link, Route, Routes} from "react-router-dom";

import circle from "../../assests/circle.png";
import line from "../../assests/cyrcle-line.png";


function Step3() {
  return ( <>

      <div className="step">
        <div className="bg pt-[4.167vw]">
          <div className="steps3"></div>
        </div>


        <div className="step3">

          <div className=" step3-text  flex-col   ">
            <div className='br-text h-[1380px]'>
              <h1 className="h22">Business Details:</h1>
              <div className="register">
                <h2>Type of Legal Organization:</h2>
              </div>
              <div className="label flex  flex-row pt-[32px]">
              <div className="label-container flex justify-start ">
              <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="check-text flex content-center">Cooperative</label>
              </div>

              <div className="label-container flex justify-start ">
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="check-text flex content-center">Tribal Franchise Corporation</label>
              </div>

              <div className="label-container flex justify-start ">
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="check-text flex content-center">Estate or Trust</label>
              </div>

            </div>
              <div className="label flex  flex-row pt-[20px]">
                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Non Tribal Corporation</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Finansial Institution</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Insurance</label>
                </div>

              </div>

              <div className="label flex  flex-row pt-[20px]">
                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Non-Profit Organization</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Partnership</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Sole Proprietor</label>
                </div>

              </div>

              <div className="label flex  flex-row pt-[20px]">
                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Native American Owned</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="radio" id="check" name="check" value="HTML"></input>
                  <label className="check-text flex content-center">Other</label>
                </div>
              </div>
              <div className="member pt-[64px]">
                <h2>Are you a member of Sisseton Wahpeton Oyate:</h2>
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="member-text flex content-center">Yes</label>
                <input type="radio" id="check" name="check" value="HTML"></input>
                <label className="member-text flex content-center">No</label>
              </div>
              <div className="member pt-[32px]">
                <h3 className="pr-[60px]">What Percentage is owned by Sisseton Wahpeton Oyate:</h3>
                <input  type="last-name" pattern="" placeholder=""/>

              </div>
              <div className="member pt-[32px]">
                <h3 className="pr-[139px]">What Percentage is owned by American Indians:</h3>
                <input  type="last-name" pattern="" placeholder=""/>

              </div>

              <div className="SIC flex pt-[72px]">
                <h1 className="ml-[341px]">SIC Header</h1>
                <h2 className="ml-[319px]">SIC Child Code</h2>
              </div>
              <div className="member pt-[19px] ">

                <h1>Standart Industrial Classification <br></br> (SIC Codes) </h1>
                <select className="w-[400px] h-[40px] ml-[11px] mr-[20px]" name="state">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>
                <select className="w-[180px] h-[40px]" name="state ">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>

              </div>
              <div className="member pt-[32px] ">

                <h1>Standart Industrial Classification <br></br> (SIC Codes) </h1>
                <select className="w-[400px] h-[40px] ml-[11px] mr-[20px]" name="state">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>
                <select className="w-[180px] h-[40px]" name="state ">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>

              </div>
              <div className="member pt-[32px] ">

                <h1>Standart Industrial Classification <br></br> (SIC Codes) </h1>
                <select className="w-[400px] h-[40px] ml-[11px] mr-[20px]" name="state">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>
                <select className="w-[180px] h-[40px]" name="state ">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>

              </div>
              <div className="member pt-[30px] ">

                <h1>Standart Industrial Classification <br></br> (SIC Codes) </h1>
                <select className="w-[400px] h-[40px] ml-[11px] mr-[20px]" name="state">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>
                <select className="w-[180px] h-[40px]" name="state ">
                  <option value="1">test1</option>
                  <option value="2">test2</option>
                  <option value="3">test3</option>

                </select>

              </div>
              <div className="member pt-[59px]">
                <h3>Tax Type Paid or Collected:</h3>
              </div>

              <div className="label flex  flex-row pt-[32px]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Retail Sales</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Gas, Electric or Comunication</label>
                </div>
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Taxable Services</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Commercial Occupancy</label>
                </div>
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center ">Hotel Occupancy</label>
                </div>

              </div>


              <div className="label flex  flex-row pt-[27px]">
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Contractor use Taxes</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Cigarette & Tobacco Tax</label>
                </div>
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Contractor Excise Tax</label>
                </div>

                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center mr-[12px]">Meal Tax</label>
                </div>
                <div className="label-container flex justify-start ">
                  <input type="checkbox" id="check" name="check" value="HTML"></input>
                  <label className="checkbox-text flex content-center ">Other</label>
                </div>

              </div>


              <div className="register-button ">
                <div className="back  ">
                  <Link to="/Application/step2">Back</Link>
                </div>
                <div className="next  hover:bg-[#F2B75B]">
                  <Link to="/Application/step4">Next</Link>
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

export default Step3;

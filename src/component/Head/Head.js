import './Head.css';
import decor from "../../assests/decor 1.png"
import bizon from "../../assests/animals-bizon-trava-progulka-pole-152271 (1) 1.jpg"


function Head() {
  return (


    <div className="bizon">

      <img src={bizon} alt="bizon "/>
      <div className="centered">
       <h1>WELCOME TO THE SWO TAX OFFICE ON-LINE</h1>

        <p>Through this webpage, new and currently licensed vendors may request
          and submit their application to the SWO
          Tax Office for processing</p>
        </div>
      <div className="decor1">
        <img src={decor} alt="decor "/>
      </div>







    </div>


  );

}

export default Head;

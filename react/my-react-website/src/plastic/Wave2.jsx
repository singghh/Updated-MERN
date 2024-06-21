import React from "react";
import crush1 from "../assets/crush1.png";
import crush2 from "../assets/crush2.png";
import crush3 from "../assets/crush3.png";
import cup4 from "../assets/cup4.png";

function Wave2(){

    return(<>
    
    <div className="bg-[#0b4867]">
        
        <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1290 320"><path fill="#031f37" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,106.7C384,117,480,107,576,133.3C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="bg-[#031f37]">
            <img src={crush1} alt="" width={130} className="absolute rotate-12 left-72 bottom-[-120px]"/>
            <img src={crush2} alt="" width={130}  className="absolute rotate-[120deg] right-72 " />
            <img src={cup4} alt="" width={100}  className="absolute rotate-[200deg] right-[800px]" />
            <img src={crush3} alt="" width={130} className="rotate-45"/>
        </div>
        </div>
    </div>
    </>)

}
export default Wave2
import React, { useState } from "react";
import Accord from "./Accord";
import { MdKeyboardArrowDown } from "react-icons/md";
import { div } from "@tensorflow/tfjs-core";

function AccordMatter() {
  const [selected, setSelected] = useState(null);
  const [turn,setTurn]=useState(true);

  function handleSingle(getId) {
    setSelected(getId === selected ? null : getId);
    console.log(getId);
    setTurn(getId===selected?true:false);
  }

  return (
    <>

    <div className="grid justify-center bg-[#0b4867] py-10 items-center h-[450px]">
      {Accord.length > 0 ? (
        Accord.map((items, index) => (
            
          <div
            className="bg-[#0b4867] text-white py-4"
            key={index}
          >
            <div className="py-1">
              <div
                className="grid cursor-pointer items-center gap-5 grid-rows-1 grid-cols-2"
                onClick={() => handleSingle(items.id)}>
                <p className="font-semibold text-xl tracking-wide">{items.Question}</p>
                <span>
                  <MdKeyboardArrowDown size={30} className={selected===items.id?"rotate-180 transition-all duration-300":"rotate-0 transition-all duration-300"}/>
                </span>
              </div>
              <div
  className={`transition-all duration-500 ease-in-out ${
    selected === items.id ? "opacity-100 translate-y-5" : "opacity-50 -translate-y-5"
  }`}
>
  {selected === items.id ? <p className="py-3 w-[550px] text-gray-300">{items.Answer}</p> : ""}
</div>

            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      </div>
    </>
  );
}

export default AccordMatter;

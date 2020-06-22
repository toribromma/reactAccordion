import React, {useState} from "react";
import "./style.css";
import Chevron from "../Chevron";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
    }
 
 return (
   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">{props.title}</p>
       <Chevron className={"accordion__icon"} width={10} fill={"#777"} />
     </button>
     <div className="accordion__content">
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html: props.content }}
       />
     </div>
   </div>
 );
}

export default Accordion;
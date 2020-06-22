import React, {useState, useRef} from "react";
import "./style.css";
import Chevron from "../Chevron";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        console.log(content.current.scrollHeight)
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

 
 return (
   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">{props.title}</p>
       <Chevron className={"accordion__icon"} width={10} fill={"#777"} />
     </button>
     <div ref={content} style={{ maxHeight: `${setHeight}`}} className="accordion__content">
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html: props.content }}
       />
     </div>
   </div>
 );
}

export default Accordion;
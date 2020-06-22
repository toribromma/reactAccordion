import React, {useState, useRef} from "react";
import "./style.css";
import Chevron from "../Chevron";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        console.log(content.current.scrollHeight)
    }

 
 return (
   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">{props.title}</p>
       <Chevron className={"accordion__icon"} width={10} fill={"#777"} />
     </button>
     <div ref={content} className="accordion__content">
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html: props.content }}
       />
     </div>
   </div>
 );
}

export default Accordion;
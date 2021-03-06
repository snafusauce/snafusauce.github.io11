import "./topbar.scss"
import { Instagram, LinkedIn, Mail, Twitter } from "@material-ui/icons"
import { useState } from "react";

export default function Topbar({ menuOpen, setMenuOpen }) {

    /*
        const[topbar, setTopbar] = useState(false);

    const changeShadow = () => {
      console.log(window.scrollY);
        if(window.scrollY >= 3){
            setTopbar(true);
        } else {
            setTopbar(false);
        }
    }
    
    window.addEventListener("scroll", changeShadow, true);
    */
  

    return (
        //{topbar ? 'topbar scroll' : "topbar " + (menuOpen && "active")}
        <div className = {"topbar scroll " + (menuOpen && "active")} id="topbar"> 
            <div className="wrapper">
                <div className="left"> 
                <a href="https://www.linkedin.com/in/mikecsaucedo/" target="_blank" rel="noopener noreferrer" className="icon"> <LinkedIn/></a>
                <a href="https://twitter.com/mike1sauce" target="_blank" rel="noopener noreferrer" className="icon"> <Twitter/></a>
                <a href="https://www.instagram.com/mike1sauce/" target="_blank" rel="noopener noreferrer" className="icon"> <Instagram/></a>
                <a href="mailto:mikecsaucedo@gmail.com" target="_blank" rel="noopener noreferrer" className="icon"> <Mail/></a>
                </div>
                

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

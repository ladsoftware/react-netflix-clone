import React,{useState,useEffect} from 'react';
import logo from "./assets/images/icon-64.png";
import userIcon from "./assets/images/user-solid.svg";

import "./Nav.css";

const Nav = ()=>{
    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else{   
                setShow(false);
            }
        });

        return ()=>{window.removeEventListener("scroll",null);};
        
    },[])
    return (
        <nav className={`${show && 'scrolled'}`}>
            <img className='logo' src={logo} alt="logo" />
            <img className='user-icon' src={userIcon} alt="User Menu Icon" />
        </nav>
    )
};

export default Nav;
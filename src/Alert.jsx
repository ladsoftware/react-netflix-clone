import React,{useContext} from "react";
import {AppContext} from "./context/AppContext";


export default function Alert(){
    const {alert,setAlert} = useContext(AppContext);
    function closeAlert(){
        setAlert({});
    }
    return (
        <>
        
        <div className={`alert-container ${Object.keys(alert).length > 0?"active":""}`}>
            <div className={`alert`}>
                <h2>{alert.title}</h2>
                <p>{alert.message}</p>
                <button className="btn-danger" onClick={closeAlert}>Close</button>
            </div>
        </div>
         
        </>
    );
}
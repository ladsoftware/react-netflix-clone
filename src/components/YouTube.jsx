import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const YouTube = ()=>{ 
    const {trailerUrl,setTrailerUrl} = useContext(AppContext);
    function ClosePlayer(){
        document.body.classList.remove("overflow-hiddden");
        setTrailerUrl(null);
    }
    return (
        <>
            {trailerUrl && (
            <div className="overlay">
                <span className="close-btn" onClick={ClosePlayer}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m9.414 8 5.293-5.293a1 1 0 1 0-1.414-1.414L8 6.586 2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8Z"/>
                    </svg>
                </span>
                <div className="youtube-player-box">
                    <iframe 
                        className="stan-smith"
                        id="trailer" 
                        title="Trailer"
                        frameBorder="0" 
                        wmode="Opaque" 
                        allowFullScreen="allowFullScreen"
                        allow='autoplay'
                        src={trailerUrl}
                    >

                    </iframe>
                </div>
            </div>
            )}
        </>
        
    );
}

export default YouTube;
import React, {useState,useEffect, useContext} from 'react';
import axios from './axios';
import {AppContext} from "./context/AppContext";


const poster_url = "https://image.tmdb.org/t/p/w500";
const backdrop_url = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl,isLargeRow}){
    const [movies,setMovies]  = useState([]);
    const [scrollLeft,setScrollLeft]  = useState(false);
    const [scrollRight,setScrollRight]  = useState(true);
    const {handleTrailer} = useContext(AppContext);
    
    useEffect(()=>{
        (async ()=>{
            const request = await axios.get(fetchUrl);
            
            setMovies(request.data.results);
        })();
        
    },[fetchUrl]);
    
    function handleScroll(e){
        const steps = window.innerWidth / 2;
        const btn = e.target.closest(".arrow-btn");
        const ele = e.target.closest(".scroll-wrapper").querySelector(".row-posters");
        btn.className.includes("next-btn")?ele.scrollLeft += steps: ele.scrollLeft -= steps
        
        setTimeout(()=>{
            let current = ele.scrollLeft;
            let width = ele.clientWidth;
            let scrollWidth = ele.scrollWidth;
            setScrollRight(!((scrollWidth - current)== width));
            setScrollLeft(current > 100);
        },300);
        
    }

    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className='scroll-wrapper relative'>
                {scrollLeft && (
                    <span className='arrow-btn prev-btn' onClick={handleScroll}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </span>
                    )
                }
                {scrollRight && (
                    <span className='arrow-btn next-btn' onClick={handleScroll}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </span>)
                }
                <div className='row-posters'>

                    {movies.map(movie => (
                        <div  
                            key={movie.id}                        
                            title={movie?.title || movie?.name || movie?.original_name}                            
                            onClick={()=>handleTrailer(movie.id, movie.first_air_date?"tv":"movie")}
                            className={`row-poster ${isLargeRow?"large":''}` }
                            style={{backgroundImage:`url(${poster_url}${isLargeRow?movie.poster_path:movie.backdrop_path})`}} 
                            alt={movie?.title || movie?.name || movie?.original_name} ></div>
                        
                    ) )}
                </div>
            </div>
          
        </div>
    )
}

export default Row;
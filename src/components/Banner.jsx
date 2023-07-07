import React, {useState, useEffect, useContext} from 'react';
import axios from '../axios';
import requests from '../requests';
import {AppContext} from "../context/AppContext";
import "../Banner.css";


const backdrop_url = "https://image.tmdb.org/t/p/original";


const Banner = ()=>{
    const [movie, setMovie] = useState([]);
    const {handleTrailer} = useContext(AppContext);

    useEffect(()=>{
        (async()=>{
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        })();
    },[]);
   
    return (
        <header 
            style={{
                backgroundSize:"cover",
                backgroundImage:`url(${backdrop_url}${movie?.backdrop_path})`,
                backgroundPosition:"center center"
            }}
        >
            <div className='banner-content'>
                <div className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</div>
                <div className='buttons btn'>
                    <button className='btn play'  onClick={()=>handleTrailer(movie.id, movie.first_air_date?"tv":"movie")}>Play</button>
                    <button className='btn list'>List</button>
                </div>
                <div className='banner-description'>{movie?.overview}</div>
                
            </div>
            <div className='fade-bottom'></div>
        </header>
    );
}


export default Banner;
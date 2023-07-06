//use react context or define state here on the parent level.
import React,{useState} from 'react';
import './App.css';
import Row from './Row';
import axios from './axios';
import Banner from './Banner';
import Nav from './Nav';
import requests  from "./requests";
import YouTube from './YouTube';
import Alert from "./Alert";

import {AppContext} from "./context/AppContext";

function App() {
  const [trailerUrl,setTrailerUrl]  = useState('');
  const [alert,setAlert]  = useState({});

  const handleTrailer = async (id, type)=>{
    setTrailerUrl('');
    let url = type+"/"+id+ requests.fetchTrailers;        
    
    const request = await axios.get(url);        
    let len = request?.data?.videos?.results?.length||0; 
    let trailer, trailer_id;
    for(let i=0; i < len;i++){            
        trailer = request?.data?.videos?.results[len-(i+1)];
        if(trailer.type.toLowerCase() === "trailer" && trailer.site === "YouTube" && trailer.key && trailer.name.toLowerCase().includes("trailer")){
            trailer_id = trailer.key;
            break;
        }
    }
    if(trailer_id){ 
        let vid_url = `https://www.youtube.com/embed/${trailer_id}?wmode=transparent&rel=0&modestbranding=0&autohide=1&mute=0&controls=1&autoplay=1&fs=1&rel=0`;
        setTrailerUrl(vid_url);
    }else{
      
      setAlert({
        title:"No Trailer",
        message:"Trailer not Available",
      });
    }
  }

  return (
    <div className="App">
      <AppContext.Provider value={{
        trailerUrl,
        setTrailerUrl,
        handleTrailer,
        alert,
        setAlert
      }}>

      
        <Nav />
        <Banner />
        <YouTube />
        <Alert />
        <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />{/* 
        <Row title="Horro Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentries} /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;

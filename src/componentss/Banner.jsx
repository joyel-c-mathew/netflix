import React, { useEffect, useState } from 'react'
import'./Banner.css'
import instance from '../instance';

function Banner({fetchurl}) { //  1 st step ithelek fetch url destructure aki  aa velya image cover ai verran look app.js
  console.log(fetchurl); // call akki


  /* to store data */
  const[movie,setmovie]=useState({})   // 5th step  is state creation to store data {} koduthath  data edukkan  ath object ayyond {} empty koduthu
  const base_url = "https://image.tmdb.org/t/p/original/"; // 7th step banner vekkan vechath



  const fetchData = async()=>{ //  3rd step fetch aakki
    const response = await instance.get(fetchurl)
    
    
    // to accesss a particular object(movie) from array (respoce.data.result)
  

    /*console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);*/  // 4t step  orre object ayyi varran anu math . flor cheythtah

setmovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]) // 6thth step // random ayy kittan math.random* array de length= data.result.length-1 then decimal kalayan  math.floor il iituu 
// responce.data.result koduthath aviide ann content ullath bakki ulath venda
// set movie koduthath movie leek oru content store avvan 
  }

  useEffect(()=>{  // second step useeffct kodukkum becoz ith side effect an, purthiin kodunnth kond fetch url
  fetchData() // mukkalil ulla fetch data call avvum

  }, []) //[] koduthath refresh akkumbo only one  data varum

  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
<div className="banner-details">
<h1>{movie.name}</h1>
<button className='btn btn-danger'>play</button>
<button className='btn btn-outline-light ms-4'>More info</button>
<h3>{movie.overview?.slice(0,200)}...</h3>
</div>
    </div>
  
  )
}



export default Banner

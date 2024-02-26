import React, { useEffect, useState } from 'react'
import'./Row.css'
import instance from '../instance';

function Row({tittle,fetchUrl,isPoster}) { // object destructring
    /*console.log(tittle,fetchUrl);*/

const[movies,setMovies]= useState([]) //5th step state crete akkunu for aa array  of 20 item, data.result il kanadathnamk sotre akan // usestate to store variabble
                                    // setmovies koduthath value change akkann  empty array ninnu array of 20 item akkan
const base_url = "https://image.tmdb.org/t/p/original"; // 8th step image varran




    const fetchData = async()=>{     // second step  data fetch cheyunnu async vechh and ith side effect anu becoz data purth niinum edukunuu
      const response = await instance.get(fetchUrl)
      /*console.log(response.data.results);*/   // 4th step  data and results koduthath data kittan


     
      setMovies(response.data.results)  // 6th step  d
    }
    console.log(movies); // 6th step call akki



    useEffect(()=>{  //3rd step calling fetchdata ith use effect search akki kitum  we want empty array ... component load avana fst time mathram use efffect call avvum
      fetchData()
    },[])  // [] eth nammal pass aknam empt array  // 7th step {movies .map}


  return (
    <div className='row'>
      <h3>{tittle}</h3> 


      <div className="movie-row">
      
    { movies.map(item=>(<img className= {`movie ${isPoster?'movie-poster':'movie'}`}  src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="poster" />)  )  
    }     
        
        </div> 
        </div>
  )
}

export default Row

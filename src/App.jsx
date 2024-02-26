
import './App.css'
import Banner from './componentss/Banner'
import Nav from './componentss/Nav'

import Row from './componentss/Row'
import requests from './request'



function App() {


  

  return (
    <>
    <Nav/>
   <Banner fetchurl={requests.fetchNetflixOriginals}/>
  
   <Row isPoster='true' tittle='Trending'fetchUrl={requests.fetchTrending}/>  
   
   <Row tittle='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
   <Row tittle='Top Rated' fetchUrl={requests.fetchTopRated  }/>
   <Row tittle='Action' fetchUrl={requests.fetchActionMovies}/>
   <Row tittle='comedy' fetchUrl={requests.fetchComedyMovies}/>
   <Row tittle='Horror' fetchUrl={requests.fetchHorrorMovies}/>
   <Row tittle='romance' fetchUrl={requests.fetchRomanceMovies}/>
   <Row tittle='documentries' fetchUrl={requests.fetchDocumentaries}/>
   
   
    </>
  )
}

export default App

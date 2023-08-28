import Head from 'next/head'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Popular from '../components/Popular'
import movies from '../styles/movies.module.css'
import styles from "../styles/Layout.module.css"
import Recommended from "../components/Recommended"
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Home({popularlist, upcoming, recommended}) {


  const [loading, setloading] = useState(true)
  const [selectedmovie, setselectedmovie]= useState({})
  const [selected, setselected] = useState(false)

  const [searchMovies, setsearchMovies]=useState({})
  const [expanded , setexpanded] = useState(false)
  const [search, setsearch]= useState(false)

  useEffect(() => {

    
    const timer = setTimeout(() => {
      setloading(false)
    }, 1000);
    return () => clearTimeout(timer);

  }, [loading]);
  
    if(loading){
      return (
       <div className={movies.loader_container}>
           <div className="spinner"></div>
         </div>
      )
      }

      
    return (
    <>

      <Head>
        <title>moviedb</title>
        <meta name="description" content="movie website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Nav  searchmovies={setsearchMovies} search={setsearch} expanded={setexpanded}/>
      
      
      <Slider Slides={popularlist.results} search={search} />
      
      


      {/* text information*/}
      
      
      <div className={search ? styles.none :styles.text}>
        <h1>Million of movies, Tv shows and people to discover</h1>
        <p>moviedb - Just a better place to discover movies online for free. It allows you to explore movies online in high quality for free. No registration is required. The content is updated daily with fast streaming servers, multi-language subtitles supported. Just open moviedb and watch your favorite movies, tv-shows. We have almost any movie, tv-shows you want to watch!<br />
            Please bookmark moviedb to update about domains.<br />
            Please help us by sharing this site with your friends. Thanks!
        </p>
      </div>
      
      
      
      {/* main latest movies upcoming and recomended */}
      
      
      <div className={styles.container}>
          <main className={styles.main}>
            
            <Popular  search={search}  selected = {setselected} selectedmovie = {setselectedmovie}  setexpanded= {setexpanded}popularlist={search ? searchMovies : popularlist} title={"Trending"} expanded={expanded}/>
            {search ? <div className={styles.none}></div> :<Popular popularlist={upcoming} title={"What's New"}  mediatype={"movie"}/>}
            <Recommended  recommended={recommended} mediaType='movie'/>
          </main>
        </div>
        <Footer />
      
    </>
  )
}




export const getStaticProps = async () =>{
  const res =await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=0c55e77b8c48f4c85063d957ff2a1851')
  
  const popularlist =  await res.json()
  const upcominglist =await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&page=1')
  
  const upcoming = await upcominglist.json();
 
  const latestmovies =await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&page=1')
  
  const  recommended= await latestmovies.json();
  


  return{
    props: {
      popularlist,
      upcoming,
      recommended
    },

    
  }
  
}

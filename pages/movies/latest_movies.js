
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Popular from '../../components/Popular';
import movies from '../../styles/movies.module.css'
import Pagination from '../../components/pagination';
import {ReactLoading} from "react-loading";
import Footer from '../../components/Footer';
import Head from 'next/head';



const latest_movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true)
    
    const [expanded, setexpanded]=useState(true)
    const [popularlist, setpopularlist] = useState({})
    
    // const pages =[2,3,4,5,6,7,8,9,10]
    
    const handleClicked = async (page)=>{
        // setloading(true)
        // setCurrentPage(page)
        const popularlist =await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&page=${page}`)
        setpopularlist(await popularlist.json());
    
        // setloading(false)
        
      }
  useEffect(() => {
    
    return () => {
      handleClicked(currentPage)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);


   if(loading){
   return (
    <div className={movies.loader_container}>
        {/* <div className="spinner"></div> */}
      </div>
   )
   }
      
  return (
    
    
    <>
    <Head>
    <title>moviedb | Latest Movies</title>
        <meta name="description" content="movie website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav/>
    <div className={movies.container}>
      <div className={movies.main}>
        <Popular popularlist={popularlist} expanded={expanded} path={"slected/selectedmovie"} mediatype = {"movie"}/>
        </div>
    {/* <div className={movies.pages}>
    {pages.map((page) => (
          <button className={movies.page_btn} onClick={()=>setpage(page)}>{page}</button>
      ))
      }
        
    </div> */}
    <Pagination itemsperpage={20} totalItems={400} paginate={handleClicked}/>
    </div>
    <Footer />
  </>
  )
 
  }
export default latest_movies


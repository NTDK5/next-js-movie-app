import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Popular from '../../components/Popular';
import movies from '../../styles/movies.module.css'
import Head from 'next/head'




const Tv = () => {
    const [page, setpage] = useState("1")
    console.log(page)
    const [expanded, setexpanded]=useState(true)
    const [popularlist, setpopularlist] = useState({})
    const pages =[1,2,3,4,5,6,7,8,9,10];
    const handleClicked = async (page)=>{
        const popularlist =await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&page=${page}`)
        setpopularlist(await popularlist.json());
        
        
      }
    useEffect(() => {
      return () => {
        handleClicked(page)
      }
  }, [])
  
      
  return (
    <>
    <Head>
                <title>moviedb | Latest Tv Shows</title>
                    <meta name="description" content="movie website" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
            </Head>
    <Nav/>
    <div className={movies.container}>
      <div className={movies.main}>
        <Popular popularlist={popularlist} expanded={expanded} path={"/selected_tv/Selected_Series"} mediatype = {"tv"} />
      </div>
    <div className={movies.pages}>
    {pages.map((page) => (
          <button className={movies.page_btn} onClick={()=>setpage(page)}>{page}</button>
      ))
      }
        
    </div>
    </div>
  </>
  )
}

export default Tv

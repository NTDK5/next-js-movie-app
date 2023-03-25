import { useState } from 'react';
import navstyles from'../styles/nav.module.css';
import Link from 'next/link';


const Nav =  ({searchmovies, search, expanded}) => {
  const fechMovies= async (searchKey)=>{
    const searchMovieslist =await fetch(`https://api.themoviedb.org/3/search/tv?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&query=${searchKey}&page=1&include_adult=false`)

    searchmovies(await searchMovieslist.json());
    
    
  }

  const searchMovies = (e) =>{
    e.preventDefault()
    search(true)
    fechMovies(searchKey)
    expanded(false)
  }
  
  const [searchKey, setsearchKey]= useState("") 

    return (
        <nav className={navstyles.nav}>
        <Link href='/'><h1 className={navstyles.logo}>MOVIEDB</h1></Link>
        <ul>
          <Link href="/movies/latest_movies"><li>Movies</li></Link>
          <Link href="/tv/Top"><li>Recomendation</li></Link>
          <Link href="/tv/Tv  "><li>Tv series</li></Link>
        </ul>
        <form onSubmit={searchMovies} className={navstyles.search_bar}>
          <input type="text" onChange={(e) => setsearchKey(e.target.value)} placeholder="Search Movies"/>
        </form>
      </nav>
    )
  }
  
  export default Nav
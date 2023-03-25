import React from 'react'
import { useState } from 'react'
import style  from '../styles/top.module.css'
import { useEffect } from 'react'


const ListItem = ({id}) => {
    const [Details, setDetails] = useState()

    const getDetails = async (Id) =>{
        const res =await fetch(`https://api.themoviedb.org/3/tv/${Id}?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US`)
        
            setDetails(await res.json())

    }
    

    let posterpaths = Details?.poster_path
    let imgsrcs = `https://image.tmdb.org/t/p/original${posterpaths}`
    
    useEffect(() => {
        getDetails(id)
      
      }, [])
  
    return (
        
            <div className={style.itemcard}>
                <img src={imgsrcs} className={style.img}></img>
                <h1 className={style.title}>{Details?.name}</h1>
                <h4 className={style.release}>{Details?.vote_average}</h4> 
            </div>


  )
}

export default ListItem
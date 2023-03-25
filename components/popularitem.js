import Link from "next/link"
import Image from "next/image"
import articleStyles from "../styles/popularitem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"



const Popularitem = ({list, selectedmovie, selected, path, mediatype}) => {
  let posterpath = list.poster_path
  const mediaType =  mediatype? mediatype : list.media_type   
  let imgsrc = `https://image.tmdb.org/t/p/original${posterpath}` 
  const backgroundimg ={
    backgroundImage: `url(${imgsrc})`,
  }



  return (

    <Link href={{
      pathname:`/selected_${mediaType}/Selected_${mediaType}`,
      query: { id : `${list.id}`},
    }}>
      <div className={articleStyles.box}>
        <div className={articleStyles.card} style={backgroundimg} >
          <h4 className={articleStyles.mediatype}>{list.media_type ? mediaType : null} </h4>
        </div>
        <div className={articleStyles.season_txt}>
              <h2>{list.original_title ? list.title : list.name}</h2>
              <h4>{list.release_date}</h4>                       
          </div>
      </div>
      </Link>

  )
}

export default Popularitem

const getPosterURL = (posterpath)=>{
  return `https://image.tmdb.org/t/p/original${posterpath}` 
}
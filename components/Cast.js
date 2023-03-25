import React from 'react'
import cast_style from "../styles/cast.module.css"


const cast = ({cast}) => {

    let profile_path = cast.profile_path
    let imgsrcs = `https://image.tmdb.org/t/p/original${profile_path}`
    const backgroundimgs ={
        backgroundImage: `url(${imgsrcs})`,
      }


  return (

        <div className={cast_style.item_card}>
            <div className={cast_style.img} style={backgroundimgs} > </div>
            <div className={cast_style.info}>
                <h3 className={cast_style.name}>{cast.name}</h3>
                <h3>Character: {cast.character}</h3>
                <h3></h3>
            </div>
        </div>
  )
}

export default cast
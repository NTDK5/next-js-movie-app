import styles from "../styles/popular.module.css"
import { useState } from "react"
import Popularitem from "./popularitem"

const Popular = ({popularlist, expanded, search, selectedmovie, selected, setexpanded, title, path, mediatype}) => {

   const dataForDisplay = expanded ? popularlist.results : popularlist.results?.slice(0,10)

  return (
    <>
    <h1 className={styles.title}>{search?"Search Results" : title}</h1>
    <div className={styles.container} >
    {dataForDisplay?.map((list) => (
          <Popularitem list={list} selected={selected} selectedmovie={selectedmovie} path={path}  mediatype ={mediatype}/>
 
      ))
      }
      <button type="button" onClick={() => setexpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
    </div>
    </>
  )
}

export default Popular

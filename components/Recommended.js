import styles from "../styles/popularitem.module.css"
import { useState } from "react"
import Upcomingitem from "./Upcomingitem"

const  Recommended = ({recommended}) => {

   const [expanded, setExpanded] = useState(true)
   const dataForDisplay = recommended?.results  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>You May Like</h1>
      <div className={styles.outer}>
      {dataForDisplay?.map((list) => (
            <Upcomingitem list={list}/>
  
        ))
        }
      </div>
    </div>
  )
}

export default Recommended

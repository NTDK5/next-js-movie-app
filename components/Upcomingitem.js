import Link from "next/link"
import style from "../styles/popularitem.module.css"


const Upcomingitem = ({list, mediaType}) => {
  let posterpath = list.poster_path
  let imgsrc = `https://image.tmdb.org/t/p/original${posterpath}` 
  const backgroundimg ={
    backgroundImage: `url(${imgsrc})`,
  }

  
  return (
    <Link href={{
      pathname:`/selected_${mediaType}/Selected_${mediaType}`,
      query: { id : `${list.id}`},
    }}>
        <div  style={backgroundimg}>
        </div>

      </Link>
        

  )
}

export default Upcomingitem
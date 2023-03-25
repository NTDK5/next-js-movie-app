import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Nav from "../../components/Nav"
import Style from "../../styles/selectedmovie.module.css"
import Cast from "../../components/Cast"
import Head from 'next/head'




const selectedmovie = () => {
    const router = useRouter()
    const [recommend, setrecommend] = useState({})
    const [expand, setexpand] = useState(false)
    const getDetails = async (Id) =>{
        const res =await fetch(`https://api.themoviedb.org/3/movie/${Id}?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US`)
        
        setDetails(await res.json())

        const casts =await fetch(`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US`)
        
        setcast(await casts.json())

    
        const recommends =await fetch(`https://api.themoviedb.org/3/movie/${Id}/recommendations?api_key=0c55e77b8c48f4c85063d957ff2a1851&language=en-US&page=1`)
        
        setrecommend(await recommends.json())
    
      }
    const {
      query: {id},
    } = router
    const [Id, setId] =useState(id)
    const [Details, setDetails] = useState({})
    const [cast, setcast] = useState({})
    let posterpaths = Details.poster_path
    let imgsrcs = `https://image.tmdb.org/t/p/original${posterpaths}`
    const backgroundimgs ={
        backgroundImage: `url(${imgsrcs})`,
      }
      const imgsrc= `https://image.tmdb.org/t/p/original${Details.backdrop_path}`
      const backgroundimg ={
        backgroundImage: `linear-gradient(to right, #000000e6 10%,hsla(202, 43%, 16%, 0.451) 41%,#00000066 61%,#000000e3 100%), 
        linear-gradient(to bottom, #000000d9 10%,#172d3a66 41%,#00000066 61%,#000000f2 90%),url(${imgsrc})`
      }



    useEffect(() => {
      getDetails(Id)

    }, [])
    const casts = expand ? cast.cast :cast.cast?.slice(0,6)
    return (
<>
            <Head>
                <title>moviedb | Recomended</title>
                    <meta name="description" content="movie website" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div className={Style.slider} >
              <div className={Style.current} style={backgroundimg}></div>
            </div>

            <div className={Style.container}>
                <main className={Style.main}>
                  <div className={Style.poster_img} style={backgroundimgs} ></div>
                  <div className={Style.info}>
                      <h1 className={Style.title}>{Details.original_title}</h1>
                      <div className={Style.box}>
                        <div className={Style.innerbox}>
                          <h4>Release Date</h4>
                          <h6 className={Style.release}>{Details.release_date}</h6> 
                        </div>
                        <div className={Style.innerbox}>
                          <h4>Genre</h4>
                            
                          {/* <h6 className={Style.release}>{Details.genres[0].name}</h6> 
                          <h6 className={Style.release}>{Details.genres[1]?.name}</h6>  */}
                        </div>
                        <div className={Style.innerbox}>
                          <h4>Time</h4>
                          <h6 className={Style.release}>{Details.runtime}</h6> 
                        </div>
                      </div>
                      
                      <div className={Style.description}><p>{Details.overview}</p></div>
                      <div className={Style.list}>
                        <div className={Style.list1}>
                          <div className={Style.innerlist}>
                            <h4>popularity:</h4>
                            <h4 className={Style.release}>{Details.popularity}</h4> 
                          </div>
                          <div className={Style.innerlist}>
                            <h4>Rating:</h4>
                            <h4 className={Style.release}>{Details.vote_average}</h4> 
                          </div>
                          </div>
                          <div className={Style.list1}>
                          <div className={Style.innerlist}>
                            <h4>Budget:</h4>
                            <h4 className={Style.release}>{Details.budget}$</h4> 
                          </div>
                          <div className={Style.innerlist}>
                            <h4>Popularity:</h4>
                            <h4 className={Style.release}>{Details.popularity}</h4> 
                          </div>
                        </div> 
                      </div>
                      <div className={Style.btn_container}>
                        <button className={Style.trailer}>Watch Trailer</button>
                        <button className={Style.add}>Add To Favorites </button>
                      </div>
                    </div>
                  
                  
                </main>
                <h1 className={Style.top}> Top Cast</h1>
                <div className={Style.cast_container}>
                  {casts?.map((cast) => (
                    
                        <Cast cast={cast}/>
                        
                  ))
                  }

                  <button onClick={()=>setexpand(!expand)}>{expand ? 'Show Less' : 'Show More'} </button>
                </div>
{/*                 
                <Recommended recommended={recommend} /> */}
            </div>
            


</>
    )
}

export default selectedmovie

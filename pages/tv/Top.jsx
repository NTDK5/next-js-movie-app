import React from 'react'
import ListItem from '../../components/ListItem'
import  style  from '../../styles/top.module.css'
import Link from "next/link"
import Nav from '../../components/Nav'
import Head from 'next/head'

const Top = () => {
    const tv_id = [1396, 1438, 1399, 2316, 46648, 1668, 60574, 70523, 66732, 95396, 118357, 62560, 63247, 100088, 157744, 71712, 48891, 18165, 95403, 48866, 69050, 94605, 120911, 93405, 80752, 82428, 66788, 90296, 93544, 86248, 64464, 155537, 156902, 69889]
    const mediaType = "tv"

  return (
    <>
    <Head>
                <title>moviedb | Top Tv Shows</title>
                    <meta name="description" content="movie website" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
            </Head>
    <Nav />
    <div className={style.container}>
      
        <h1>My Top Tv</h1>
        <p>my personal top Tv Series i have watched so far sorted by rating. </p>
        {tv_id.map((list) => (
          <Link href={{
            pathname:`/selected_${mediaType}/Selected_${mediaType}`,
            query: { id : `${list}`},
          }}>
            <ListItem id={list}/>
          </Link>
 
      ))
      }
    </div>
    </>
  )
}

export default Top


import React from 'react'
import style from "../styles/pagination.module.css"



const pagination = ({itemsperpage, totalItems, paginate}) => {
  const pageNumber= []
  
  for(let i = 1; i<=Math.ceil(totalItems / itemsperpage); i++){
    pageNumber.push(i)
  }
  console.log(pageNumber)

  return (
    <nav >
      <ul className={style.pagination}>
        {pageNumber.map(number => (
          <li className={style.pageItem}>
          <a href='#' onClick={()=>paginate(number)} className={style.pagelink}> {number} </a>
        </li>
        ))
        }
      </ul>
    </nav>
  )
}

export default pagination
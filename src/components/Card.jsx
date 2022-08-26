import React from 'react'
import './Card.css'

// const test_image_url_motherless = "https://m.media-amazon.com/images/M/MV5BNzQ0Mjk1YjItNWI1Ny00NWE2LWFlYTAtYjViY2YzMTVlOGVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
const test_img_url_brooklyn99 = "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg"
const test_title = "Brooklyn Nine-Nine"
const year = 2022


function Card(props) {

  return (
    <div className='container'>
        <img src={props.posterURL} alt='Poster' className='posterImg'></img>
        <div className='cardInfo'>
            <h1>{props.title}</h1>
            <p>{props.year}</p>
            <button className='cardButton'>Click Me!</button>
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import './Card.css'

/**
 * Creates a card of a result from API call.
 * @param {*} props props passed on from Parent.
 * @returns Single search result of a movie, series, etc. from API.
 */
function Card(props) {

  return (
    <div className='container'>
        <img src={props.posterURL} alt='Poster' className='posterImg'></img>
        <div className='cardInfo'>
            <div className="movieTitle">
              <h1 >{props.title}</h1>
              </div>
            <p>{props.year}</p>
            <button className='cardButton'>Click Me!</button>
        </div>
    </div>
  )
}

export default Card
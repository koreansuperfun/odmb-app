import React from 'react'
import './ErrorCard.css'

/**
 * Creates an error card when we don't receive a result, or can't connect to API server.
 * @param {message} props
 * @returns ErrorCard.
 */
function ErrorCard(props) {
  return (
    <div className='errorCard'>
        <div className ='emoji'>
            &#129335;
        </div>

        <div className = 'errorMsg'>
            <h1>{props.message}</h1>
        </div>
    </div>
  )
}

export default ErrorCard
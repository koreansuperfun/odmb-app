import React from 'react'
import './ErrorCard.css'

const test_err_message = "Error Msg Placeholder"

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
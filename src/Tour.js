import React, { useState } from 'react'

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false)
  return (
    <article className='single-tour' key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h3>{name}</h3>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}.....`}
          <button
            onClick={() => {
              setReadmore(!readMore)
            }}
          >
            {readMore ? 'Show Less' : 'Show More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>Delete Tour</button>
      </footer>
    </article>
  )
}

export default Tour

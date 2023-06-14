import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({data}) => {
  return (
    <div className='card'>
        {/* <h3>{data.name}</h3> */}
        <Link to={`/beers/${data.id}`}><h3>{data.name}</h3></Link>
        {/* <p>{data.tagline}</p> */}
        <img src={data.image_url} alt="beer-detail" />
    </div>
  )
}

export default Card
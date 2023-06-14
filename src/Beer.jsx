import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Beer = () => {
    const [beer, setBeer] = useState([])

  const params = useParams()

    console.log(params)
const getBeer = async()=>{
  const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
  const data = await res.json()
  setBeer(data[0])
}
useEffect(()=>{
  getBeer()
})

  return (
    <div>
        <h3>Info traida de params: {params.id}</h3>
        <h3>Info traida de la api: {beer.id}</h3>
        <h1>{beer.name}</h1>
        <img src={beer.image_url} alt="beer-detail" />
  
    </div>
  )
}

export default Beer
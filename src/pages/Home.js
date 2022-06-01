import React from 'react'
import Card from '../components/Card'
import {movies} from '../data'
export default function Home() {
  return (
    <div className='Home'>
    {movies.map(movie=>(
    <Card Key={movie.id} movie={movie}/>
    ))}
    </div>
  )
}

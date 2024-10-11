import React from 'react'
import Title from './Title'
import { tours } from '../Data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title = 'featured' subtitle = 'tours'/>

      <div className="section-center featured-center">
        {tours.map((tour) =>{
          const {id, image, location, title, date, text, duration, cost} = tour

          return (
            <Tour key = {tour.id} {...tour}/>
          )
        })}
      </div>
    </section>
  )
}

export default Tours

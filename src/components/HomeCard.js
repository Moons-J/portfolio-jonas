import React from "react"
import './HomeCard.css'

const HomeCard = (props) => {
  return (

    <div className='home-card basic-card flex-center'>
      <h2>welcome</h2>
      <h3>to the Portfolio of Jonas Moons.</h3>
      <a href="/aboutme">about me</a>
      <a href="/mywork">my work</a>
    </div>
  )
};

export default HomeCard;

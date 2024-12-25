import React from 'react'
import { Link } from 'react-router-dom';
import './Consoles.css'
import playstation from '../assets/Playstation.jpg'
import xbox from '../assets/Xbox.jpg'
import nintendo from '../assets/Nintendo.jpeg'


export const Consoles = () => {
  return (
    <section id="game-categories">
      <h2 style={{ textAlign: 'center' }}>Game Categories</h2>
      <div className="game-list">
        <div className="game-item">
          <a href="/ps">
            <h3>PlayStation Games</h3>
            <Link to={"/playstation"}>
            <img src={playstation} alt="PlayStation Games" /></Link>
          </a>
        </div>
        <div className="game-item">
          <a href="/xbox">
            <h3>Xbox Games</h3>
            <Link to={"/xbox"}>
            <img src={xbox} alt="Xbox Games" /></Link>
          </a>
        </div>
        <div className="game-item">
          <a href="/nintendo">
            <h3>Nintendo Games</h3>
            <Link to={"/nintendo"}>
            <img src={nintendo} alt="Nintendo Games" /></Link>
          </a>
        </div>
      </div>
    </section>
  )
}

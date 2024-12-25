import React from 'react'
import { Link } from 'react-router-dom';
import gow from '../assets/god of war ps4.jpg';
import spiderman from "../assets/marvel's spider-man.jpg";
import dmc5 from '../assets/dmc5.jpg';
import re4 from '../assets/re4.jpg';
import rdr2 from '../assets/red dead redemption 2.jpg';
import tlou from '../assets/the last of us.jpg';
import './Playstation.css';

export const Playstation = () => {
    return (
        <main>
          <h2>PlayStation Games</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src={gow} alt="God of War" />
              <h3 className="ps-games">God of War</h3>
              <p>₹999</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src={tlou} alt="The Last of Us" />
              <h3 className="ps-games">The Last of Us</h3>
              <p>₹999</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src={rdr2} alt="Red Dead Redemption 2" />
              <h3 className="ps-games">Red Dead Redemption 2</h3>
              <p>₹2,199</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src={spiderman} alt="Marvel's Spider-Man" />
              <h3 className="ps-games">Marvel's Spider-Man</h3>
              <p>₹2,499</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src={dmc5} alt="Devil May Cry 5" />
              <h3 className="ps-games">Devil May Cry 5</h3>
              <p>₹2,499</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
            <div className="product-card">
              <img src={re4} alt="Resident Evil 4 Remake" />
              <h3 className="ps-games">Resident Evil 4 Remake</h3>
              <p>₹1,999</p>
              <button className="add-to-cart-ps">Add to Cart</button>
            </div>
          </div>
        </main>
    );
}

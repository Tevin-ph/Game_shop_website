import React from 'react'
import Batman from '../assets/Batman Arkham Trilogy.jpg';
import BOTW from "../assets/BOTW.jpg";
import takestwo from '../assets/It Takes Two.jpg';
import Mario from '../assets/Mario Kart Deluxe.jpg';
import Nier from '../assets/Nier Automata.jpg';
import Sonic from '../assets/Sonic Frontiers.jpg';
import './Nintendo.css'

export const Nintendo = () => {
    return (
        <main>
          <h2>Xbox Games</h2>
          <div className="product-grid">
            <div className="product-card-ni">
              <img src={Batman} alt="Batman Arkham Trilogy" />
              <h3 className="xbox-games">Batman Arkham Trilogy</h3>
              <p>₹4,999</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
            <div className="product-card-ni">
              <img src={BOTW} alt="Legend of Zelda: Breath of the Wild" />
              <h3 className="xbox-games">Legend of Zelda: Breath of the Wild</h3>
              <p>₹2,999</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
            <div className="product-card-ni">
              <img src={takestwo} alt="It Takes Two" />
              <h3 className="xbox-games">It Takes Two</h3>
              <p>₹3,499</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
            <div className="product-card-ni">
              <img src={Mario} alt="Mario Kart Deluxe" />
              <h3 className="xbox-games">Mario Kart Deluxe</h3>
              <p>₹2,499</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
            <div className="product-card-ni">
              <img src={Nier} alt="Nier Automata" />
              <h3 className="xbox-games">Nier Automata</h3>
              <p>₹3,999</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
            <div className="product-card-ni">
              <img src={Sonic} alt="Sonic Frontiers" />
              <h3 className="xbox-games">Sonic Frontiers</h3>
              <p>₹2,999</p>
              <button className="add-to-cart-ni">Add to Cart</button>
            </div>
          </div>
        </main>
      );
}

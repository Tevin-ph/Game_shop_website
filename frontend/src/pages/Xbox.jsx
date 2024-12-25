import React from 'react'
import codmw2 from '../assets/codmw2.jpg';
import cyberpunk from "../assets/cyberpunk 2077.jpg";
import deadisland from '../assets/dead island 2.jpg';
import deadspace from '../assets/dead space remake.jpg';
import hogwarts from '../assets/hogwarts legacy.jpg';
import witcher3 from '../assets/witcher3.jpg';
import './Xbox.css'

export const Xbox = () => {
    return (
        <main>
          <h2>Xbox Games</h2>
          <div className="product-grid">
            <div className="product-card-xb">
              <img src={codmw2} alt="Call of Duty: Modern Warfare 2" />
              <h3 className="xbox-games">Call of Duty: Modern Warfare 2</h3>
              <p>₹4,999</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
            <div className="product-card-xb">
              <img src={cyberpunk} alt="Cyberpunk 2077" />
              <h3 className="xbox-games">Cyberpunk 2077</h3>
              <p>₹2,999</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
            <div className="product-card-xb">
              <img src={deadisland} alt="Dead Island 2" />
              <h3 className="xbox-games">Dead Island 2</h3>
              <p>₹3,499</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
            <div className="product-card-xb">
              <img src={deadspace} alt="Dead Space Remake" />
              <h3 className="xbox-games">Dead Space Remake</h3>
              <p>₹2,499</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
            <div className="product-card-xb">
              <img src={hogwarts} alt="Hogwarts Legacy" />
              <h3 className="xbox-games">Hogwarts Legacy</h3>
              <p>₹3,999</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
            <div className="product-card-xb">
              <img src={witcher3} alt="Witcher 3 - Complete Edition" />
              <h3 className="xbox-games">Witcher 3 - Complete Edition</h3>
              <p>₹2,999</p>
              <button className="add-to-cart-xb">Add to Cart</button>
            </div>
          </div>
        </main>
      );
}

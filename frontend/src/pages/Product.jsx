import React from 'react'
import gow from "../assets/god of war ps4.jpg"
import spiderman from "../assets/marvel's spider-man.jpg"
import cyberpunk from "../assets/cyberpunk 2077.jpg"
import takestwo from "../assets/It Takes Two.jpg"
import witcher3 from "../assets/witcher3.jpg"
import BOTW from "../assets/BOTW.jpg"
import './Product.css'

const Product = () => {
    return (
    <div>
      <h2>Trending Games</h2>
      <section className="card-container">
        <section className="card">
          <img src={gow} alt="God of War" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>God of War</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹999
            </div>
          </section>
          <section>
            <button className="add-to-cart-ps final-cart">Add to Cart</button>
          </section>
        </section>
        
        <section className="card">
          <img src={spiderman} alt="Marvel's Spider-Man" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>Marvel's Spiderman</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹1,999
            </div>
          </section>
          <section>
            <button className="add-to-cart-ps final-cart">Add to Cart</button>
          </section>
        </section>

        <section className="card">
          <img src={cyberpunk} alt="Cyberpunk 2077" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>Cyberpunk 2077</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹2,999
            </div>
          </section>
          <section>
            <button className="add-to-cart-xb final-cart">Add to Cart</button>
          </section>
        </section>

        <section className="card">
          <img src={witcher3} alt="Witcher 3 - The Wild Hunt" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>Witcher 3 - The Wild Hunt</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹3,499
            </div>
          </section>
          <section>
            <button className="add-to-cart-xb final-cart">Add to Cart</button>
          </section>
        </section>

        <section className="card">
          <img src={takestwo} alt="It Takes Two" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>It Takes Two</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹1,499
            </div>
          </section>
          <section>
            <button className="add-to-cart-ni final-cart">Add to Cart</button>
          </section>
        </section>

        <section className="card">
          <img src={BOTW} alt="Legend of Zelda - Breath of the Wild" className='card-img'/>
          <div className='card-details'>
            <h3 className='card-title'>Legend of Zelda - Breath of the Wild</h3>
          </div>
          <section className='card-price'>
            <div className="price">
              ₹2,299
            </div>
          </section>
          <section>
            <button className="add-to-cart-ni final-cart">Add to Cart</button>
          </section>
        </section>
      </section>
    </div>
  )
}

export default Product

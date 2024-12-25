import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext'; 
import gow from '../assets/god of war ps4.jpg';
import spiderman from "../assets/marvel's spider-man.jpg";
import cyberpunk from "../assets/cyberpunk 2077.jpg";
import takestwo from "../assets/It Takes Two.jpg";
import witcher3 from "../assets/witcher3.jpg";
import BOTW from "../assets/BOTW.jpg";
import './Trending.css';

const Trending = () => {
  const { addToCart, removeFromCart, cart } = useCart();
  const [addedGames, setAddedGames] = useState([]);

  const games = [
    {
      id: 1,
      title: 'God of War',
      price: 999,
      image: gow,
    },
    {
      id: 2,
      title: "Marvel's Spiderman",
      price: 1999,
      image: spiderman,
    },
    {
      id: 3,
      title: 'Cyberpunk 2077',
      price: 2999,
      image: cyberpunk,
    },
    {
      id: 4,
      title: 'Witcher 3 - The Wild Hunt',
      price: 3499,
      image: witcher3,
    },
    {
      id: 5,
      title: 'It Takes Two',
      price: 1499,
      image: takestwo,
    },
    {
      id: 6,
      title: 'Legend of Zelda - Breath of the Wild',
      price: 2299,
      image: BOTW,
    },
  ];

  // Check if the game is in the cart
  useEffect(() => {
    const added = games.filter(game => cart.some(cartItem => cartItem.id === game.id));
    setAddedGames(added.map(game => game.id)); // Store the IDs of the games that are in the cart
  }, [cart]);

  // Handle adding/removing a game from the cart
  const handleAddToCart = (game) => {
    addToCart(game); // Add the game to the cart
  };

  const handleRemoveFromCart = (game) => {
    removeFromCart(game.id); // Remove the game from the cart
  };

  return (
    <div>
      <h2 className='trending'>Trending Games</h2>
      <section className="card-container">
        {games.map((game) => (
          <section className="card" key={game.id}>
            <img src={game.image} alt={game.title} className="card-img" />
            <div className="card-details">
              <h3 className="card-title">{game.title}</h3>
            </div>
            <section className="card-price">
              <div className="price">₹{game.price}</div>
            </section>
            <section>
              {addedGames.includes(game.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(game)}
                  className="added-to-cart-button"
                >
                  Added to Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(game)}
                  className="add-to-cart-trending final-cart"
                >
                  Add to Cart
                </button>
              )}
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Trending;

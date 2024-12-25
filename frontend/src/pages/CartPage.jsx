import React from 'react';
import { useCart } from './CartContext'; 
import { Link } from 'react-router-dom';
import './CartPage.css'; 

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); 

  return (
    <div>
      <h2 className="your-cart">Your Cart</h2>
      {cart.length === 0 ? (
        <p className='empty-cart'>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((game, index) => (
            <div key={index} className="cart-item">
              <img
                src={game.image}
                alt={game.title}
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <h3>{game.title}</h3>
                <p>₹{game.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(game.id)}
                className="remove-from-cart"
              >
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <h2 className="your-cart"><Link to="/">Back to Home</Link></h2>
    </div>
  );
};

export default CartPage;
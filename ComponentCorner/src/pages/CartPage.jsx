import React from "react";
import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  
  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <section className="cart-section">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                onRemove={removeFromCart}
              />
            ))}
          </div>
          <h3 className="cart-total">Total: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default CartPage;
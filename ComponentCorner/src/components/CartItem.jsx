import './CartItem.css';

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3 className="cart-item-name">{props.name}</h3>
        <p className="cart-item-price">${props.price}</p>
      </div>
      <button onClick={() => props.onRemove(props.id)} className="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default CartItem;

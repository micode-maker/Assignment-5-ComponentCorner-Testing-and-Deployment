import "./ProductCard.css";

function ProductCard(props) {

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={props.image} 
          alt={props.name}
          className="product-image" 
        />
      </div>
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <p className="product-description">{props.description}</p>
        <h3 className="product-price">{props.price}</h3>
        <button onClick={() => props.onAddToCart(props.product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
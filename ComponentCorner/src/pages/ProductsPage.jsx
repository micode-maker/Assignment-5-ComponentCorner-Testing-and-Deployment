import React from 'react';
import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart }) {
  return (
    <main className="main-content">
        <h2>Featured Products</h2>
    <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={`$${product.price}`}
            product={product}
            onAddToCart={addToCart}
          />
        ))}   
    </div>
  </main>
  );
}

export default ProductsPage;
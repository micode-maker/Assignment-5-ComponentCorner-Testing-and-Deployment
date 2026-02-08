import React from "react";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div>
    <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Discover amazing products and electronic components"
        ctaText="Shop Now!"
    />
    <section className="benefits-section">
        <h2>Why Shop with Us?</h2>
        <p>
          We offer the best products at unbeatable prices. Enjoy fast shipping,
          quality service, and an easy shopping experience!
        </p>
    </section>
    </div>
  );
}

export default HomePage;
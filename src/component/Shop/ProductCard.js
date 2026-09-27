import React from "react";
import { useCart } from "./CartContext";
import { CATEGORY_STYLE, RARITY_STYLE } from "./products";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const fullStars = Math.round(product.rating);
  const cat = CATEGORY_STYLE[product.category];
  const rarity = RARITY_STYLE[product.rarity] || RARITY_STYLE.common;

  return (
    <div className="sc-card" style={{ "--sc-frame": cat.color, "--sc-frame-dark": cat.dark }}>
      <div className="sc-card-crown">
        <span
          className="sc-rarity-gem"
          style={{ background: rarity.color }}
          title={rarity.label}
        />
        <h3 className="sc-card-title">{product.title}</h3>
        <span className="sc-mana-cost" title="Ціна">
          ${Math.round(product.price)}
        </span>
      </div>

      <div className="sc-card-media" style={{ background: product.gradient }}>
        <span className="sc-card-icon" aria-hidden="true">
          {product.icon}
        </span>
        {discount > 0 && <span className="sc-badge sc-badge-sale">-{discount}%</span>}
      </div>

      <div className="sc-card-typeline">
        <span>{cat.typeLine}</span>
        {product.badge && <span className="sc-typeline-tag">{product.badge}</span>}
      </div>

      <div className="sc-card-body">
        <div className="sc-card-rating">
          <span className="sc-stars">
            {"★".repeat(fullStars)}
            {"☆".repeat(5 - fullStars)}
          </span>
          <span className="sc-card-reviews">({product.reviews})</span>
        </div>

        <button className="sc-add-btn" onClick={() => addItem(product)}>
          Додати в кошик
        </button>

        <div className="sc-pt-box">
          <span className="sc-price-was">
            {discount > 0 ? `$${product.originalPrice.toFixed(2)}` : ""}
          </span>
          <span className="sc-price-now">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

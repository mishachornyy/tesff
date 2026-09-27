import React, { useMemo, useState } from "react";
import { CATEGORIES, CATEGORY_STYLE, PRODUCTS } from "./products";
import ProductCard from "./ProductCard";
import { useCart } from "./CartContext";
import "./Shop.css";

const SORTS = [
  { id: "recent", label: "Спочатку нові" },
  { id: "price-asc", label: "Ціна: від низької" },
  { id: "price-desc", label: "Ціна: від високої" },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("recent");
  const { openCart, count } = useCart();

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(
      (p) => activeCategory === "all" || p.category === activeCategory
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeCategory, sort]);

  const categoryCount = (id) =>
    id === "all" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === id).length;

  return (
    <div className="sc-shop">
      <section className="sc-hero">
        <div className="sc-hero-text">
          <span className="sc-hero-kicker">3D-друк на замовлення</span>
          <h1>SashaAndMisha3D</h1>
          <p>
            Deck box'и, лічильники та аксесуари для MTG, надруковані на 3D-принтері
            з увагою до кожної деталі. Тестова вітрина за мотивами нашого Etsy-магазину.
          </p>
          <div className="sc-hero-stats">
            <div>
              <strong>4229+</strong>
              <span>продажів</span>
            </div>
            <div>
              <strong>833</strong>
              <span>шанувальників</span>
            </div>
            <div>
              <strong>5.0★</strong>
              <span>рейтинг</span>
            </div>
          </div>
          <a className="sc-hero-cta" href="#sc-products">
            Дивитись каталог
          </a>
        </div>
      </section>

      <div className="sc-toolbar" id="sc-products">
        <div className="sc-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`sc-tab ${activeCategory === c.id ? "sc-tab-active" : ""}`}
              onClick={() => setActiveCategory(c.id)}
            >
              <span
                className="sc-tab-dot"
                style={{
                  background: CATEGORY_STYLE[c.id]
                    ? CATEGORY_STYLE[c.id].color
                    : "conic-gradient(#3b6fb0,#3f7d3a,#e8e2c8,#b8b0a1,#d9480f)",
                }}
              />
              {c.label} <span className="sc-tab-count">{categoryCount(c.id)}</span>
            </button>
          ))}
        </div>

        <div className="sc-toolbar-right">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="sc-sort"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <button className="sc-cart-btn" onClick={openCart}>
            🛒 Кошик{count > 0 ? ` (${count})` : ""}
          </button>
        </div>
      </div>

      <div className="sc-grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, clearCart } =
    useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
    setTimeout(() => {
      setCheckedOut(false);
      closeCart();
    }, 3000);
  };

  return (
    <div className="sc-cart-overlay" onClick={closeCart}>
      <div className="sc-cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="sc-cart-header">
          <h2>Кошик</h2>
          <button className="sc-cart-close" onClick={closeCart} aria-label="Закрити">
            ×
          </button>
        </div>

        {checkedOut ? (
          <div className="sc-cart-success">
            <div className="sc-cart-success-icon">✅</div>
            <p>Дякуємо! Це демо-замовлення оформлено.</p>
          </div>
        ) : items.length === 0 ? (
          <div className="sc-cart-empty">
            <p>Кошик порожній.</p>
            <p className="sc-cart-empty-sub">
              Додайте пару шедеврів для своєї MTG-колекції 🐉
            </p>
          </div>
        ) : (
          <>
            <div className="sc-cart-items">
              {items.map((item) => (
                <div className="sc-cart-item" key={item.id}>
                  <div
                    className="sc-cart-item-media"
                    style={{ background: item.gradient }}
                  >
                    <span>{item.icon}</span>
                  </div>
                  <div className="sc-cart-item-info">
                    <p className="sc-cart-item-title">{item.title}</p>
                    <div className="sc-cart-item-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <div className="sc-cart-item-price">
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                    <button
                      className="sc-cart-item-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Прибрати
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="sc-cart-footer">
              <div className="sc-cart-subtotal">
                <span>Разом</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="sc-checkout-btn" onClick={handleCheckout}>
                Оформити (демо)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

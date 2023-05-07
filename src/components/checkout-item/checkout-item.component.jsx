import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  const handleAddItem = () => {
    addItemToCart(cartItem);
  };
  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };
  const handleClearItem = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="quantity">
        <span className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={handleAddItem}>
          &#10095;
        </span>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

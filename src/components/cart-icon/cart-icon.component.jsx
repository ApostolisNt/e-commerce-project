import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ShoppingBag from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img className="shopping-icon" src={ShoppingBag} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

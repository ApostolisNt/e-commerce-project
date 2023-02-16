import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { RemoveButton } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const removeItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price} €
        </span>
      </ItemDetails>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;

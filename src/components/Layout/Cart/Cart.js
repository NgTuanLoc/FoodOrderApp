import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const { items, totalAmount, addItem, removeItem } = ctx;
  const cartItemRemoveHandler = (id) => {removeItem(id)};
  const cartItemAddHandler = (item) => {addItem(item)};
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {totalAmount !== 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

import classes from "./Cart.module.css";
import Modal from '../UI/Modal'

const Cart = (props) => {
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "sushi", amount: 2, price: 12 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
     <Modal>
         {CartItem}
         <div className={classes.total}>
             <span>Total Amout</span>
             <span>35.62</span>
         </div>

         <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
         </div>
     </Modal>

  );
};

export default Cart;

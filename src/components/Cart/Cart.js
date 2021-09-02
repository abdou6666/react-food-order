import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from './CartItem';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = ` $${cartCtx.tottalAmount.toFixed(2)} `
    const hasItems = cartCtx.items.length > 0;
    function cartRemoveItemHandler(id) {
        
    }
    function cartAddItemHandler(item) {
        
    }
    const cartItems = <ul className={classes['cart-items']}> {cartCtx.items.map((item) =>
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            onRemove={cartRemoveItemHandler.bind(null,item.id)}
            onAdd={cartAddItemHandler.bind(null,item)} />)}
    </ul>;
    return (
        <Modal onClick={props.onClose}>
           {cartItems}
            <div className={classes.tottal}>
                <span>Tottal Amount </span>
                <span>{totalAmount } </span>
            </div>
            <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                   {hasItems &&  <button className={classes.button}>Order</button>}
            </div>
            
        </Modal>
    )
}

export default Cart

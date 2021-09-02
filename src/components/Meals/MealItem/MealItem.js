import { Fragment } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from '../../../store/cart-context';
const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.meal.price.toFixed(2)}`

    function addToCartHandler(amount) {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price : props.meal.price
        })
    }
      
    return (
    <Fragment>
             <div className={classes.meal}>
                 <h3>
                {props.meal.name}
                     </h3>
                     <div className={classes.description}>{props.meal.description} </div>
                <div className={classes.price}>{price}</div>
                <div><MealItemForm onAddToCart={ addToCartHandler}/></div>
            </div>
            </Fragment>
      
    )
}

export default MealItem;

import { Fragment } from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
    
      const price = `$${props.meal.price}`
    return (
    <Fragment>
             <div className={classes.meal}>
                 <h3>
                {props.meal.name}
                     </h3>
                     <div className={classes.description}>{props.meal.description} </div>
                <div className={classes.price}>{price}</div>
                <div></div>
            </div>
            </Fragment>
      
    )
}

export default MealItem;

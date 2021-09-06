import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import { useRef,useState } from "react";
const MealItemForm = (props) => {
    const [amountIsValid, setAmoundIsValid] = useState(true);
       const amountRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
     
        const enteredAmountRef = amountRef.current.value;
        const enterAmountNumber = +enteredAmountRef;
    
        if (enteredAmountRef.trim().length === 0 || enteredAmountRef < 1 || enteredAmountRef > 5) {
            setAmoundIsValid(false);
            return;
        }
        props.onAddToCart(enterAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountRef} input={{
                id: "amount",
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue:'1'
            } }/>
            <button className={classes.button}> + ADD </button>
              {!amountIsValid && <p> Please enter a valid amount (1 - 5) </p>}
        </form>
      
    )
}

export default MealItemForm

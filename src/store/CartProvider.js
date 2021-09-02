import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    tottalAmount:0
}
function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTottalAmount = state.tottalAmount + action.item.price * action.item.updatedTottalAmount;
        return {
            items: updatedItems,
            tottalAmount: updatedTottalAmount
        }
    }
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
                function addItemHandler(item) {
                dispatchCartState({ type: 'ADD', item:item})
                }
                function removeItemHandler(id) {
                    dispatchCartState({ type: 'REMOVE', id:id})
                                }   
    const cartContext = {items: cartState.items,
    tottalAmount: cartState.tottalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
}
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider

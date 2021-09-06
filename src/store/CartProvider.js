import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    tottalAmount:0
}
function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const updatedTottalAmount = state.tottalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
          
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        
            updatedItems = state.items.concat(action.item);
        }
     
        return {
            items: updatedItems,
            tottalAmount: updatedTottalAmount
        }
    }
    if (action.type === 'REMOVE') {

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTottalAmount = state.tottalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
              updatedItems = state.items.filter( item => action.id !== item.id);
        } else {
           const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            tottalAmount: updatedTottalAmount
        }
    }
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
                function addItemToCartHandler(item) {
                dispatchCartState({ type: 'ADD', item:item})
                }
                function removeItemFromCartHandler(id) {
                    dispatchCartState({ type: 'REMOVE', id:id})
                                }   
    const cartContext = {items: cartState.items,
    tottalAmount: cartState.tottalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
}
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider

import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from 'react';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  function showCartHandler() {
    setCartIsShown(true);
  }
  function closeCartHandler() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={closeCartHandler} /> }
      <Header onShowCart={ showCartHandler}/>
    
      <main>
        <Meals/>
      </main>
   </CartProvider>
  );
}

export default App;

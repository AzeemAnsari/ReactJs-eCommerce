import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddtoCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleCartUpdateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const handleCaptureCheckout = (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      handleEmptyCart();
    } catch (error) {
      setErrorMsg(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddtoCart={handleAddtoCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleCartUpdateQty={handleCartUpdateQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              handleCaptureCheckout={handleCaptureCheckout}
              error={errorMsg}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

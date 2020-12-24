import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleCartUpdateQty }) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{' '}
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
              handleCartUpdateQty={handleCartUpdateQty}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" className={classes.subtotal}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className={classes.cartBtns}>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading...';

  return (
    <Container>
      <div className={classes.toobar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

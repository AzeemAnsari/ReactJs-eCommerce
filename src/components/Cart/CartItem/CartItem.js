import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ item, handleCartUpdateQty, handleRemoveFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
        style={{ backgroundSize: '50%' }}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5" align="right">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleCartUpdateQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleCartUpdateQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;

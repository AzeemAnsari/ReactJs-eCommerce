import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = (props) => {
  const { name, description, price, media, id } = props.product;
  const { onAddtoCart } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={media.source}
        style={{ backgroundSize: '50%' }}
        title={name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" component="h2" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Card" onClick={() => onAddtoCart(id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

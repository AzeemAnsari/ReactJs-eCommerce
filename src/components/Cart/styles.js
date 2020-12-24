import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '7%',
    ['@media(max-width: 576px)']: {
      marginTop: '25%',
      fontSize: '1.8rem',
    },
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    ['@media(max-width:320px)']: {
      marginRight: '0',
      marginBottom: '1rem',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  cartBtns: {
    display: 'flex',
    justifyContent: 'space-between',
    ['@media(max-width:320px)']: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  subtotal: {
    ['@media(max-width:576px)']: {
      fontSize: '1.5rem',
      textAlign: 'center',
      marginBottom: '1rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(220, 0, 78)',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '5%',
    marginBottom: '5%',
    width: '100%',
    justifyContent: 'space-between',
    ['@media(max-width:576px)']: {
      flexDirection: 'column',
    },
  },
}));

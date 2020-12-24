import React from 'react';
import { Link, Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerLink}>
      <Typography variant="body2" align="center">
        &copy; 2020 -{' '}
        <Link href="https://azeemansari.me" target="_blank" color="inherit">
          Azeem Ansari
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import logo from '../Shoe.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  inputRoot: {
    color: 'black',
  },
  button: {
    margin: '0',
    position: ' absolute',
    left: '35%',
    color: 'Black',

  },
  text:{
    'fontSize': '20px',
    'fontFamily': 'Lucida Handwriting'

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();


  return (
    <div className={classes.root} >
      <AppBar position="static" style={{ backgroundColor: ' #ffff33', height: 70, color: ' #000033' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >

            <img src={logo} alt="Shoes" height='80' width='80' />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <div className={classes.text} >
              <b>NAZIM SHOES STORE</b>
            </div>
          </Typography>
          <div className={classes.button}>
            <Link to="/">
              <Button variant="contained">Home</Button>
            </Link>
            {'\u00A0'}{'\u00A0'}{'\u00A0'}

            <Link to="/product">
              <Button variant="contained">Our Products</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

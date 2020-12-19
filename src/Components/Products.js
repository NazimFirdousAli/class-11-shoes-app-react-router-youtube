import React from 'react';
import Shoes from './../Shoes.json';
import gen from '../images/gen.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flexStart',
    // flexWrap:'wrap',
    margin: '25px 0px 75px 100px',
    alignItems:'center',
    maxWidth:'30%',

  },
  media: {
    height: 300,

  },
});

export default function Product() {
  const classes = useStyles();
  console.log(Shoes);

  return (
    <div className={classes.root}>
      {Object.keys(Shoes).map((Keyname) => {
        return (
          <div key={Keyname}>
            <Card>
              <CardActionArea>
              <img src={Shoes[Keyname].img} height='300' width='400'></img>
                <CardMedia>
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {Shoes[Keyname].name}
                  </Typography>
                </CardContent>
                
                <img src={gen} height='55px' width='55px'></img>
              </CardActionArea>
              <CardActions>
              <Link key={Keyname} to={`/product/${Keyname}`}>
                <Button size="small" color="primary" >
                  View details
        </Button>
        </Link>
                <Button size="small" color="primary" disabled>
                  Add to card
        </Button>
              </CardActions>
            </Card>
          </div>

        )
      })}
    </div>
  );
}

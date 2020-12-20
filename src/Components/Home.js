import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpeg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image1 from '../images/1.jpg'

import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:50,
    display: 'block',
    marginRight:'auto',
    marginLeft:'auto',
    width:'80%',
    },
}))

const SliderItem = [image1,image2,image3,image4,image5]

function Home (){
  const classes = useStyles();

    var settings = {
      draggable: true,
      autoplay: true, /* this is the new line */
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000,
      dots: true,
      };
      return (
        <div className={classes.root}>
        <Slider {...settings}  >

          {SliderItem.map(item=> {
            return(
              <div>
            <img src={item} alt='1-st image' height='450' width='100%' />
          </div>

            )
          })}
        </Slider>
        </div>
      );
    }
export default Home;
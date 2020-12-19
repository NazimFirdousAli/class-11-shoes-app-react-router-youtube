import React from 'react';
import { useParams } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



import Shoes from './../Shoes.json';

const useStyles = makeStyles({
    root:{
      marginTop:'50px',
      marginLeft:'35%',
      
    },
    card: {
        maxWidth: 425,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

function ViewItem() {
    const classes = useStyles();
    const { id } = useParams();
    console.log(id);
    console.log(Shoes[id]);

    let size = Shoes[id].size;
    

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={Shoes[id].img} />
                <CardContent>
                    <Typography color="primary" variant="h5">
                        {Shoes[id].name}<br />
                    </Typography>

                    <Typography color="#ffc400" variant="subtitle2">
                       <b> Colors Available: </b> 
                        {Shoes[id].color}
    </Typography>
                    <Typography color="textSecondary" variant="subtitle3">
                        Sizes:
    </Typography>
                    {size.map(item => {
                        return (
                            <div onChange={event => this.setSize(event)}>

                                <input type="radio" value={item} defaultChecked name={item[0]} />{item}
                            </div>
                        )
                    })}


                </CardContent>
            </Card>
        </div>

    )
}
export default ViewItem;
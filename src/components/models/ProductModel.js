import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {addProduct} from '../../store/action/orderAction'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200, 
    },
});


 const ProductModel = (props) => {
    const classes = useStyles();
    const { _id,name, image, brand, price } = props.product


    const orderHandeler = (product) =>{
        props.addProduct(product)
    }


    return (
        <Card key={_id} className={classes.root}>
            <CardActionArea className="_btn" >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name} 
                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Brand: {brand}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h3">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="h6">
                    Price ${price}
                </Typography>
                <Button 
                className="ml-auto _btn"
                 size="small"
                  variant="contained"
                   color="secondary"
                   onClick={ () => orderHandeler(props.product)}
                   
                   >
                    Add To Cart
               </Button>
            </CardActions>
        </Card>
    );
}

export default connect(null,{addProduct})(ProductModel)
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    height: 140,
  },
});


// function stockNews(props) {
//   return (
//     <div>
//       <div>
//         <p>{props.stockTitle}</p>
//         <a href={props.stockLink}>{props.stockLink}</a>
//         <img src={props.stockImg} width="200"></img>
//       </div>
//       <div>
//         <p>{props.stockTitle1}</p>
//         <a href={props.stockLink1}>{props.stockLink1}</a>
//         <img src={props.stockImg1} width="200"></img>
//       </div>
//       <div>
//         <p>{props.stockTitle2}</p>
//         <a href={props.stockLink2}>{props.stockLink2}</a>
//         <img src={props.stockImg2} width="200"></img>
//       </div>
//       <div>
//         <p>{props.stockTitle3}</p>
//         <a href={props.stockLink3}>{props.stockLink3}</a>
//         <img src={props.stockImg3} width="200"></img>
//       </div>
//       <div>
//         <p>{props.stockTitle4}</p>
//         <a href={props.stockLink4}>{props.stockLink4}</a>
//         <img src={props.stockImg4} width="200"></img>
//       </div>
//       <div>
   
export default function StockNews(props) {
  const classes = useStyles();

  return (
    <div className="CardContainer"> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.stockImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.stockTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.stockLink}>{props.stockLink}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.stockImg1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.stockTitle1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.stockLink1}>{props.stockLink1}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.stockImg2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.stockTitle2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.stockLink2}>{props.stockLink2}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.stockImg3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.stockTitle3}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.stockLink3}>{props.stockLink3}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.stockImg4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.stockTitle4}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.stockLink4}>{props.stockLink4}</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>

  );
}
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

export default function StockNews(props) {
  const classes = useStyles();

  return (
//     <div>
// //         <p> {props.title} </p>
// //         <a href={props.link}>{props.link}</a>
// //         <img src={props.newsIcon} width="200"></img>
// //       </div>
    <div className="CardContainer"> 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.newsIcon}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.link}>{props.link}</a>
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
          image={props.newsIconTwo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.titleTwo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.linkTwo}>{props.linkTwo}</a>
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
          image={props.newsIconThree}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.titleThree}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.linkThree}>{props.linkThree}</a>
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
          image={props.newsIconFour}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.titleFour}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.linkFour}>{props.LinkFour}</a>
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
          image={props.newsIconFive}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.titleFive}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <a href={props.linkFive}>{props.linkFive}</a>
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
// const globalnews = (props) => {
//   return (
//     <div>
//       <div>
//         <p> {props.title} </p>
//         <a href={props.link}>{props.link}</a>
//         <img src={props.newsIcon} width="200"></img>
//       </div>
//       <div>
//         <p>{props.titleTwo}</p>
//         <a href={props.linkTwo}>{props.inkTwo}</a>
//         <img src={props.newsIconTwo} width="200"></img>
//       </div>
//       <p>{props.titleThree}</p>
//       <a href={props.linkThree}>{props.linkThree}</a>
//       <img src={props.newsIconThree} width="200"></img>
//       <div>
//         <p>{props.titleFour}</p>
//         <a href={props.linkFour}>{props.linkFour}</a>
//         <img src={props.newsIconFour} width="200"></img>
//       </div>
//       <div>
//         <p>{props.titleFive}</p>
//         <a href={props.linkFive}>{props.linkFive}</a>
//         <img src={props.newsIconFive} width="200"></img>
//       </div>
//     </div>
//   );
// };

// export default globalnews;

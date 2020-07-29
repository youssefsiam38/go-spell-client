
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const link = `/${props.username}`

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
          <a style={{color: '#ebb802', textDecoration: 'none'}} href={link}>{props.username}</a>
        </Typography>
        <Typography variant="h6" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <Typography variant="caption" className={classes.title} color="textSecondary">
          Created At: {props.createdAt}
        </Typography>
      { props.deletable ?
      <CardActions>
        <Button style={{color: 'red'}} size="small">Delete</Button>
      </CardActions> : null
      }
    </Card>
  );
}
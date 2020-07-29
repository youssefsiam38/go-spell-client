import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tweet from './Tweet';

export default function Main(props) {
  const { tweets, title, username } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <Tweet  username={username} body={tweet.body} id={tweet.id} createdAt={tweet.createdAt} deletable/>
          <br />
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  tweets: PropTypes.array,
  title: PropTypes.string,
};
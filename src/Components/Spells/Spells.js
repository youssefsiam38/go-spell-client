import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import requests from '../../Utils/Requests.js'
import cookies from '../../Utils/cookies.js'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {tweets: [], user: {id : 0, username: '', bio : ''}, me: {id : 0, username: '', bio : '', password: ''}};
  }

  sidebar = {
    title: 'Bio',
    social: [
      { name: 'GitHub', icon: GitHubIcon, href: 'http://github.com/youssefsiam38' },
      { name: 'Twitter', icon: TwitterIcon, href: 'http://twitter.com/youssefsiam38' },
      { name: 'Facebook', icon: FacebookIcon, href: 'http://facebook.com/youssefsiam38' },
    ],
  };

  requestedUsername = window.location.pathname.split('/')[1]
  componentWillMount() {
    console.log(this.state.user)
    
    // console.log(this.requestedUsername)

    if(this.requestedUsername.length === 0) {
      let {username} = cookies.getCookies()
      if (username)
        window.location.href = `/${username}`
        else
        window.location.href = `/signin`

    }

    requests.getMe().then((res) => {
      this.setState({
        me: res
      })
    })


    console.log(this.requestedUsername)
    requests.getUser(this.requestedUsername).then((res) => {
      this.setState({
        user: res
      })
    })
    requests.getAllTweets(this.requestedUsername).then((res) => {
      this.setState({
        tweets: res
      })
    })

  }

  componentDidMount() {



      // requests.getMe().then((res) => {
      //   this.setState({
      //     me: res
      //   })
      // })

      // let this.requestedUsername = window.location.pathname.split('/')[1]

      // console.log(requestedUsername)
      // requests.getUser(requestedUsername).then((res) => {
      //   this.setState({
      //     user: res
      //   })
      // })
      // requests.getAllTweets(requestedUsername).then((res) => {
      //   this.setState({
      //     tweets: res
      //   })
      // })
  }


  render = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="Spell" />
          <br />
          <main>
            <Grid container spacing={5} >
              <Main title={`Spells`} tweets={this.state.tweets} username={this.state.user.username}/>
              <Sidebar
                title={this.sidebar.title}
                description={this.state.user.bio}
                social={this.sidebar.social}
              />
            </Grid>
          </main>
        </Container>
      </React.Fragment>
    );
  }
};

export default Blog
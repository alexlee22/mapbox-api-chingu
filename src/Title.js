import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, setToggleMenu } from './actions/simpleAction'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: null
    };
  };

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  componentDidMount = () => {
    this.setState({ classes: 'asd' });
  }

  render() {
    const { classes } = this.state
    const { setToggleMenu, setHideMenu } = this.props
    if (classes) {
      return (
        <div>
          <AppBar position="fixed">
            <Toolbar>
              
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => { setToggleMenu() }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{flexGrow: 1}} >
                Chingu-Mapbox
              </Typography>
              <Button variant="contained" color="inherit" >
                <Link target="_blank" href={"https://github.com/alexlee22/mapbox-api-chingu"} >
                  GitHub
                </Link>
              </Button>

            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

}


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  setToggleMenu: () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Title);


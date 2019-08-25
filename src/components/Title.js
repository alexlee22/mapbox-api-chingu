import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setToggleMenu } from '../actions'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
    const { setToggleMenu } = this.props
    if (classes) {
      return (
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" style={{flexGrow: 1}} >
                Chingu-Mapbox
              </Typography>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => { setToggleMenu() }}>
                <MenuIcon />
              </IconButton>

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
  setToggleMenu: () => dispatch(setToggleMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Title);


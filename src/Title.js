import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

  handleClick = () => {
    console.log('asd')
  }

  render() {
    const { classes } = this.state
    const { simpleAction } = this.props
    if (classes) {
      return (
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Chingu-Mapbox
              </Typography>
              <Button onClick={() => { simpleAction() }} styles={{float: 'right'}} color="inherit">Login</Button>
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

//<IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
//<Typography variant="h6" className={styles.title}>
//export default Title;


const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'
import { setUpdateSearch } from './actions/simpleAction';

import { styled } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

const StyledPaper = styled(Paper)({
    position: 'absolute',
    top: '75px',
    padding: '10px',
    width: '250px',
    //marginLeft: '20px',
    left: '25px',
    zIndex: 1
});

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  };

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  handleSearchText = (e) => {
    this.props.setUpdateSearch(e.target.value);
  }

  componentDidMount = () => {
    //this.setState({ classes: 'asd' });
  }

  render() {
    return(
      <Slide direction="right" in={this.props.app.showMenu} mountOnEnter unmountOnExit>
        <StyledPaper position="fixed">
          <Typography variant="h5">Search Menu</Typography>
          <TextField
              id="search-field"
              label="Search Name..."
              value={this.props.app.search}
              onChange={(e) => {this.handleSearchText(e)}}
              margin="normal"
          />
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </StyledPaper>
      </Slide>
    )
  }

}

//value={this.state.search}
//https://github.com/uber/react-map-gl/blob/5.0-release/examples/viewport-animation/src/app.js

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  setUpdateSearch: (e) => dispatch(setUpdateSearch(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
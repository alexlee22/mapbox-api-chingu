import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, setPureData } from './actions/simpleAction';
import { searchFilterData } from './selector'

import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

//import Map from './Map';
import Maptwo from './Maptwo';
import Title from './Title';
import Menu from './Menu';
import { geoJSON } from './const.js'

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#e91e63',
      },
      secondary: {
          main: '#4dd0e1',
      },
  },
});

class App extends Component {

  componentDidMount = () => {
    this.props.setPureData(geoJSON);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Title />
          <Menu />
          <Maptwo />
        </MuiThemeProvider>
      </div>
    );
  }

}

//<Map />

const mapStateToProps = state => ({
  ...state,
  filteredData: searchFilterData(state)
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (e) => dispatch(simpleAction(e)),
  setPureData: (e) => dispatch(setPureData(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



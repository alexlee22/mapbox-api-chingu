import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPureData } from '../actions';
import { searchFilterData } from '../selector'
import { MATERIAL_UI_COLORS, geoJSON } from '../const.js'

// Components
import Title from './Title';
import Menu from './Menu';
import Map from './Map';

// Material-UI theme provider
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
const theme = createMuiTheme({
  palette: {
      primary: {
          main: MATERIAL_UI_COLORS.primary,
      },
      secondary: {
          main: MATERIAL_UI_COLORS.secondary,
      },
  },
});

class App extends Component {

  // Set geoJSON on load
  componentDidMount = () => {
    this.props.setPureData(geoJSON);
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Title />
          <Menu />
          <Map />
        </MuiThemeProvider>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  ...state,
  filteredData: searchFilterData(state)
})

const mapDispatchToProps = dispatch => ({
  setPureData: (e) => dispatch(setPureData(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



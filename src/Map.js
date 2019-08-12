import React, { Component }  from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { searchFilterData } from './selector'

const MAPBOX_KEY = ''

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 1000,
                height: 600,
                latitude: -33.86349534679483,
                longitude: 151.20861055151923,
                zoom: 14
            }
        }
        this.handleClick = this.updateDimensions.bind(this);
    }
    
    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };
    updateDimensions = (e) => {
        let viewport = this.state.viewport;
        viewport.width = window.innerWidth;
        viewport.height = window.innerHeight;
        this.setState({ viewport });
    };

    render() {
      console.log(this.props)
      return (
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_KEY}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          { this.props.filteredData &&
            <React.Fragment>
              { this.props.filteredData.map((d, idx) =>
                <Marker key={idx} longitude={d.geometry.coordinates[0]} latitude={d.geometry.coordinates[1]} offsetLeft={-20} offsetTop={-10}>
                  <div>{d.properties.name}</div>
                </Marker>
              ) }
            </React.Fragment>
          }
        </ReactMapGL>
      );
    };
}

const mapStateToProps = state => ({
  ...state,
  filteredData: searchFilterData(state)
})

const mapDispatchToProps = dispatch => ({
  //simpleAction: (e) => dispatch(simpleAction(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);

//https://github.com/uber/react-map-gl/blob/master/docs/components/marker.md


/*
{ geoJSON.features.map((d, idx) =>
            <Marker key={idx} longitude={d.geometry.coordinates[0]} latitude={d.geometry.coordinates[1]} offsetLeft={-20} offsetTop={-10}>
              <div>You are here</div>
            </Marker>
          )}
          */
import React, { Component }  from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';


const MAPBOX_KEY = ''

const geoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.2152087688446,
          -33.85682062506368
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.20174407958982,
          -33.86137329543402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          151.21084213256836,
          -33.86122184063587
        ]
      }
    }
  ]
}

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
      return (
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={MAPBOX_KEY}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
          { geoJSON.features.map((d, idx) =>
            <Marker key={idx} longitude={d.geometry.coordinates[0]} latitude={d.geometry.coordinates[1]} offsetLeft={-20} offsetTop={-10}>
              <div>You are here</div>
            </Marker>
          )}
        </ReactMapGL>
      );
    };
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  //simpleAction: (e) => dispatch(simpleAction(e)),
  //setPureData: (e) => dispatch(setPureData(e))
  //setUpdateSearch: (e) => dispatch(setUpdateSearch(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);

//https://github.com/uber/react-map-gl/blob/master/docs/components/marker.md
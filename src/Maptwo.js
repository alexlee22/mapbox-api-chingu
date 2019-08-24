import React, { Component }  from 'react';
//import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { searchFilterData } from './selector';
import { setMap } from './actions/simpleAction';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = '';

const MAPBOX_CENTER = [151.20861055151923, -33.86349534679483];
const MAPBOX_ZOOM = 14;

class Maptwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          markers: null,
          loaded: false
        }
    }   
    
    // Update markers based on search
    componentDidUpdate() {

      // Check if everything has loaded
      if (this.props.filteredData && this.state.markers) {
        
        //List of marker Names, to check
        let activeMarkers = this.props.filteredData.map((d) => {
          return(d.properties.name);
        });
        
        // For each marker, toggle visibility based on menu search
        this.props.app.pureData.features.map((d) => {
        // Get marker element and assign its visiblity
          let element = this.state.markers[d.properties.name].getElement();
          if (activeMarkers.includes(d.properties.name)) {
            element.style.visibility = "visible";
          } else {
            element.style.visibility = "hidden";
          }
          return d;
          
        })
      }
      
    }
    
    //Make map + assign markers
    componentDidMount() {
        // Create map
        this.map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/dark-v9',
          center: MAPBOX_CENTER,
          zoom: MAPBOX_ZOOM
        });
        
        this.map.on('load', () => {
          // Paste all marker on map when map has loaded
          let markers = this.props.filteredData.reduce((result, d) => {
            var marker = new mapboxgl.Marker({color: '#e91e63'})
              .setLngLat(d.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 20 })
                .setHTML('<h3>' + d.properties.name  + '</h3>'));
            marker.addTo(this.map);
            result[d.properties.name] = marker;
            return result;
          }, {});
          this.setState({ markers: markers, loaded: true });
        });
        
        this.props.setMap(this.map);
      }

      render() {
        return (
            <div 
              style={{ height: '100vh', width: "100vw" }}
              ref={el => this.mapContainer = el}
              className="absolute top right left bottom"
            >
            </div>
        );
      }
}


const mapStateToProps = state => ({
  ...state,
  filteredData: searchFilterData(state)
})

const mapDispatchToProps = dispatch => ({
  //simpleAction: (e) => dispatch(simpleAction(e))
  setMap: (e => dispatch(setMap(e)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Maptwo);


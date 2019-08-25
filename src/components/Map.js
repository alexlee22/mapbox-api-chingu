import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { searchFilterData } from '../selector';
import { setMap } from '../actions';
import { MAPBOX_KEY, MAPBOX_CENTER, MAPBOX_ZOOM, MATERIAL_UI_COLORS }  from '../const';
import mapboxgl from 'mapbox-gl';

class Maptwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          markers: null
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
          accessToken: MAPBOX_KEY,
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/dark-v9',
          center: MAPBOX_CENTER,
          zoom: MAPBOX_ZOOM
        });
        
        this.map.on('load', () => {
          // For each marker,create marker on map and assign popup window
          let markers = this.props.filteredData.reduce((result, d) => {
            var marker = new mapboxgl.Marker({color: MATERIAL_UI_COLORS.primary})
              .setLngLat(d.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 20 })
                .setHTML('<h3>' + d.properties.name  + '</h3> <img style="display: block; width: auto; height: auto; max-width: 200px; max-height: 200px;, " src="' + d.properties.image + '" alt="' + d.properties.name + ', image from Wikipedia">'));
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
  setMap: (e => dispatch(setMap(e)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Maptwo);


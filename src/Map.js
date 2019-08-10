import React, { Component }  from 'react';
import ReactMapGL from 'react-map-gl';




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
        console.log(this.state.viewport)
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={MAPBOX_KEY}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    };
}

export default Map;
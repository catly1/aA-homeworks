import React from 'react';
import {withRouter} from 'react-router-dom'
import MarkerManager from '../../util/marker_manager'

class BenchMap extends React.Component {
    constructor(props) {
      super(props);
      this.bounds = {};
      this._handleClick = this._handleClick.bind(this)
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.listenForMove();
        this.listenForClick();
        
    }

    listenForClick(){
        google.maps.event.addListener(this.map, "click", (e) => {
            const coords = {
               lat: e.latLng.lat(),
               lng: e.latLng.lng() 
            }
            this._handleClick(coords);
        })
    } 

    listenForMove() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const bounds = this.map.getBounds();
            // console.log('center',
            //     bounds.getCenter().lat(),
            //     bounds.getCenter().lng());
            // console.log("north east",
            //     bounds.getNorthEast().lat(),
            //     bounds.getNorthEast().lng());
            // console.log("south west",
            //     bounds.getSouthWest().lat(),
            //     bounds.getSouthWest().lng());
            
            this.bounds = {
                "northEast": { "lat": bounds.getNorthEast().lat(), "lng": bounds.getNorthEast().lng() },
                "southWest": { "lat": bounds.getSouthWest().lat(), "lng": bounds.getSouthWest().lng() }
            }
            // this.props.updateBounds(this.bounds)
            this.props.updateFilter(this.bounds);
        });
    }

    // {
    //     "northEast": { "lat": "37.80971", "lng": "-122.39208" },
    //     "southWest": { "lat": "37.74187", "lng": "-122.47791" }
    // }
    
    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches, this.bounds)
    }

    _handleClick(coords) {
        // debugger
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }   
    
    

    render() {
        return (
            <div 
                id='map-container' 
                ref={map => this.mapNode = map}
            > </div>
                )
    }
            
}

export default withRouter(BenchMap);
export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.updateMarkers = this.updateMarkers.bind(this)
    }

    updateMarkers(benches, bounds) {
        
        benches.forEach(bench => {
            if (!this.markers[bench.id]){
                this.addMarkers(bench)
            } 
        })

        // debugger
        Object.keys(this.markers).forEach(marker => {
            if (!benches.map(e=>e.id).includes(parseInt(marker))){
                this.removeMarkers(parseInt(marker))
            }
        })
        
        // Object.keys(this.markers).forEach(marker => benches.includes(marker))
    }
    
    addMarkers(bench){
        const myLatlng = new google.maps.LatLng(bench.lat, bench.lng);
        
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map
        })
        // debugger

        this.markers[bench.id] = marker;
            // debugger
    }

    removeMarkers(marker){
        delete this.markers[marker]
    }
}


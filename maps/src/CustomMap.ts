/**
 * Instructions to every other class
 * on how they can be an argument to `addMarker`
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  markerContent(): string;
}

export class CustomMap {
 private readonly googleMap: google.maps.Map;

 constructor(divId: string) {
   const mapDiv = document.getElementById(divId);
   const latlng = new google.maps.LatLng(0, 0);
   this.googleMap = new google.maps.Map(mapDiv, {
     zoom: 1,
     center: latlng
   });

 }

 addMarker(mappable: Mappable): void {
   const marker = new google.maps.Marker({
     map: this.googleMap,
     position: {
       ...mappable.location
     }
   });

   marker.addListener('click', () => {
     const infoWindow = new google.maps.InfoWindow({
       content: mappable.markerContent()
     });
     infoWindow.open(this.googleMap, marker);
   });
 }
}

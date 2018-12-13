var Geo = require('./gsGeo');

const toRadians = function (angle) {
    return angle * Math.PI / 180;
};

function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

function getRect(lat, lng, radius){
    const RADIUS_EARTH = 6371;
    let deltaLat = toDegrees(radius / RADIUS_EARTH);
    let deltaLng = toDegrees(radius / RADIUS_EARTH / Math.cos(toRadians(lat)));
    console.log("northeast");
    console.log(lat + deltaLat);
    console.log(lng + deltaLng);
    console.log("southwest");
    console.log(lat - deltaLat);
    console.log(lng - deltaLng);
}




getRect(37.8095584,-122.2347734, 5);

var geo = new Geo();
var c = geo.getRect(37.8095584,-122.2347734, 5)
console.log(c);

if(c){
    var dist = geo.calcDistance(c.northeast.lat, c.northeast.lng, c.southwest.lat, c.southwest.lng);
    console.log(`dist: ${dist}`);
}
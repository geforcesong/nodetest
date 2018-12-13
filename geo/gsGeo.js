const toRadians = Symbol('toRadians');
const toDegrees = Symbol('toDegrees');
const RADIUS_EARTH = 6371;  // KM

class Geo {
    [toRadians](angle) {
        return angle * Math.PI / 180;
    };

    [toDegrees](angle) {
        return angle * (180 / Math.PI);
    }

    getRect(lat, lng, radius) {
        if (isNaN(lat) || isNaN(lng) || isNaN(radius)) {
            return null;
        }
        const deltaLat = this[toDegrees](radius / RADIUS_EARTH);
        const deltaLng = this[toDegrees](radius / RADIUS_EARTH / Math.cos(this[toRadians](lat)));
        return {
            northeast: {
                lat: lat + deltaLat,
                lng: lng + deltaLng
            },
            southwest: {
                lat: lat - deltaLat,
                lng: lng - deltaLng
            }
        }
    }

    calcDistance(fromLat, fromLon, toLat, toLon) {
        var dLat = this[toRadians](toLat - fromLat);
        var dLon = this[toRadians](toLon - fromLon);
        var fromLat = this[toRadians](fromLat);
        var toLat = this[toRadians](toLat);
        var a = Math.pow(Math.sin(dLat / 2), 2) +
            (Math.pow(Math.sin(dLon / 2), 2) * Math.cos(fromLat) * Math.cos(toLat));
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return RADIUS_EARTH * c * 0.62;
    }
}

module.exports = Geo;
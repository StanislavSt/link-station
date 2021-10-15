/**
 * Write a program that solves the most suitable (with most power) link station for a device at given
 * point [x,y].
 */
var devices = [
    [0, 0],
    [100, 100],
    [15, 10],
    [18, 18],
];
var stations = [
    [0, 0, 10],
    [20, 20, 5],
    [10, 0, 12],
];
var getDistanceBetweenPoints = function (point1, point2) {
    return Math.sqrt(Math.pow(Math.abs(point1[0] - point2[0]), 2) +
        Math.pow(Math.abs(point1[1] - point2[1]), 2));
};
var getStationPower = function (reach, distance) {
    if (distance > reach)
        return 0;
    return Math.pow(reach - distance, 2);
};
var getBestStationAndPower = function (device, stations) {
    var maxPower = 0;
    var bestStation;
    for (var _i = 0, stations_1 = stations; _i < stations_1.length; _i++) {
        var station = stations_1[_i];
        var distance = getDistanceBetweenPoints(device, [station[0], station[1]]);
        var power = getStationPower(station[2], distance);
        if (power > maxPower) {
            maxPower = power;
            bestStation = station;
        }
    }
    return { station: bestStation, power: maxPower };
};
var printBestStation = function (device, stations) {
    var bestStation = getBestStationAndPower(device, stations);
    bestStation.station
        ? console.log("Best link station for point", device[0], ",", device[1], " is ", bestStation.station[0], ",", bestStation.station[1], "with power", bestStation.power)
        : console.log("No link station within reach for point", device[0], ",", device[1]);
};
devices.forEach(function (device) { return printBestStation(device, stations); });

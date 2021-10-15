/**
 * Write a program that solves the most suitable (with most power) link station for a device at given
 * point [x,y].
 */

/** [coordinateX, coordinateY] */
type Point = [number, number];
/** [coordinateX, coordinateY, reach] */
type Station = [...Point, number];

const devices: Point[] = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

const stations: Station[] = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12],
];

const getDistanceBetweenPoints = (point1: Point, point2: Point) => {
  return Math.sqrt(
    Math.pow(Math.abs(point1[0] - point2[0]), 2) +
      Math.pow(Math.abs(point1[1] - point2[1]), 2)
  );
};

const getStationPower = (reach: number, distance: number) => {
  if (distance > reach) return 0;
  return Math.pow(reach - distance, 2);
};

const getBestStationAndPower = (device: Point, stations: Station[]) => {
  let maxPower = 0;
  let bestStation: Station | undefined;

  for (const station of stations) {
    const distance = getDistanceBetweenPoints(device, [station[0], station[1]]);
    const power = getStationPower(station[2], distance);
    if (power > maxPower) {
      maxPower = power;
      bestStation = station;
    }
  }

  return { station: bestStation, power: maxPower };
};

const printBestStation = (device: Point, stations: Station[]) => {
  const bestStation = getBestStationAndPower(device, stations);
  bestStation.station
    ? console.log(
        "Best link station for point",
        device[0],
        ",",
        device[1],
        " is ",
        bestStation.station[0],
        ",",
        bestStation.station[1],
        "with power",
        bestStation.power
      )
    : console.log(
        "No link station within reach for point",
        device[0],
        ",",
        device[1]
      );
};

devices.forEach((device) => printBestStation(device, stations));

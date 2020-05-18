const fs = require('fs')
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);

readFileAsync('./input.txt', {encoding: 'utf8'})
  .then((text) => {
    const input = text.split('\n');
      // console.log('CONTENT:', input);
    const roomX = parseInt(input[0][0]);
    const roomY = parseInt(input[0][2]);
    let roombaLocation = input[1].split(' ').map((str) => parseInt(str));
    const instructions = input[input.length - 1];
    let spotsCleaned = 0;
    let dirtLocations = new Set();

    for (let i = 2; i < input.length - 1; i++) {
      dirtLocations.add(input[i]);
    }

    // console.log(roomX, roomY, roombaLocation, instructions, dirtLocations);
    console.log(dirtLocations)
    if (dirtLocations.has(roombaLocation.join(' '))) {
      dirtLocations.delete(roombaLocation.join(' '));
      spotsCleaned++;
    }

    for (let instruction of instructions) {
      let [roombaX, roombaY] = roombaLocation;
      if (instruction === 'N' && roombaY < roomY - 1) {
        roombaLocation[1]++;
      }

      if (instruction === 'S' && roombaY > 0) {
        roombaLocation[1]--;
      }

      if (instruction === 'E' && roombaX < roomX - 1) {
        roombaLocation[0]++;
      }

      if (instruction === 'W' && roombaX > 0) {
        roombaLocation[0]--;
      }

      if (dirtLocations.has(roombaLocation.join(' '))) {
        dirtLocations.delete(roombaLocation.join(' '));
        spotsCleaned++;
      }
    }

    console.log('location : ', roombaLocation, 'spots Cleaned: ', spotsCleaned)
  })
  .catch((err) => {
      console.log('ERROR:', err);
});
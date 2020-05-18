const fs = require('fs')
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);

readFileAsync('./input.txt', {encoding: 'utf8'})
  .then((text) => {
    const input = text.split('\n');
      console.log('CONTENT:', input);
    const roomDimensions = input[0];
    let roombaLocation = input[1];
    const instructions = input[input.length - 1];
    let dirtLocations = new Set();

    for (let i = 2; i < input.length - 1; i++) {
      dirtLocations.add(input[i]);
    }

    console.log(roomDimensions, roombaLocation, instructions, dirtLocations);
  })
  .catch((err) => {
      console.log('ERROR:', err);
});
const fs = require('fs')
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const { activateRoomba, formatCoordinates, formatDirtCoordinates } = require('./helper');

readFileAsync('./input.txt', {encoding: 'utf8'})
  .then((text) => {
    const input = text.split('\n');
      // console.log('CONTENT:', input);
    const roomCoordinates = formatCoordinates(input[0]);
    const roombaStartCoordinates = formatCoordinates(input[1]);
    const instructions = input[input.length - 1];
    let dirtCoordinates = formatDirtCoordinates(input);

    const [roombaCoordinates, spotsCleaned] = activateRoomba(roombaStartCoordinates, dirtCoordinates, instructions, roomCoordinates);
    
    console.log(roombaCoordinates.join(' '), '\n' + spotsCleaned)
  })
  .catch((err) => {
      console.log('ERROR:', err);
});
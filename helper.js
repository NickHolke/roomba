const activateRoomba = (roombaStartCoordinates, dirtLocations, instructions, roomCoordinates) => {
  let roombaLocation = roombaStartCoordinates.slice();
  let spotsCleaned = 0;
  const [roomX, roomY] = roomCoordinates;

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
  return([roombaLocation, spotsCleaned]);
}

const formatCoordinates = (strCoordinates) => {
  return strCoordinates.split(' ').map((str) => parseInt(str));
}

const formatDirtCoordinates = (inputArr) => {
  let dirtCoordinates = new Set();
  for (let i = 2; i < inputArr.length - 1; i++) {
    dirtCoordinates.add(inputArr[i]);
  }
  return dirtCoordinates;
}

module.exports = {
  activateRoomba,
  formatCoordinates,
  formatDirtCoordinates,
}

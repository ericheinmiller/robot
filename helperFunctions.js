const directions = {
  'NORTH': 1,
  'SOUTH': -1,
  'EAST': 1,
  'WEST': -1,
};
const directionArray = ['NORTH', 'WEST', 'SOUTH', 'EAST'];

const turnRobot = (direction, turn)  => {
  const indexOfDirection = directionArray.indexOf(direction);
  if (turn === 'LEFT') {
    return indexOfDirection === 3 ? directionArray[0] : directionArray[indexOfDirection + 1];
  } else if (turn === 'RIGHT') {
    return indexOfDirection === 0 ? directionArray[3] : directionArray[indexOfDirection - 1];
  }

  return direction;
}

const checkValues = (x, y, direction) => {
  return isIntegers(x,y) ? [true, 'integer is not a digit.'] :
    checkDirection(direction) ?  [true, 'invalid direction.'] :
    checkBoardPlacement(x,y) ? [true, 'invalid board placement'] :
    false;
}

const isIntegers = (x,y) => {
  if (isNaN(x) || isNaN(y)) return true;
  const xValue = parseInt(x);
  const yValue = parseInt(y);
  if (!Number.isInteger(xValue) || !Number.isInteger(yValue)) {
    return true;
  };

  return false;
}

const checkDirection = (x) => {
  if (!directions[x]) return true;
  return false;
}

const checkBoardPlacement = (x,y) => {
  if ((x > 4 || y > 4) || (x < 0 || y < 0)) return true;
  return false;
}

const checkMoveStatus = (position) => {
  const direction = position.direction;
  const valueChange = directions[direction];
  let newValue;
  if (direction === 'NORTH' || direction === 'SOUTH') {
    newValue = position.y + valueChange;
    return (newValue > 5 || newValue < 0) ? [true, 'robot is on edge of table.'] : [false, 'y', newValue]
  } else {
    newValue = position.x + valueChange;
    return (newValue > 5 || newValue < 0) ? [true, 'robot is on edge of table.'] : [false, 'x', newValue]
  }
}

module.exports = { checkValues, turnRobot, checkMoveStatus };

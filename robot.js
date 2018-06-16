const helperFunctions = require('./helperFunctions.js');

const robot = {
  placed: false,
  position: {
    x: null,
    y: null,
    direction: null,
  },
  
  setPosition(x, y, direction) {
    robot.position.x = parseInt(x);
    robot.position.y = parseInt(y);
    robot.position.direction = direction;
    robot.placed = true;
  },

  checkForErrors(results) {
    if (results[0]) {
      console.log(`Error: ${ results[1] }`);
      return;
    }
  },

  input(input) {
    const inputArray =  input.split( /[ ,]+/);

    switch (inputArray[0]) {
      case 'PLACE':
        const x = inputArray[1];
        const y = inputArray[2];
        const direction = inputArray[3]
        robot.checkForErrors(helperFunctions.checkValues(x, y, direction));
        robot.setPosition(x,y,direction);
        break;

      case 'MOVE':
        if (!robot.placed) return;
        const results = helperFunctions.checkMoveStatus(robot.position);
        robot.checkForErrors(results);
        robot.position[results[1]] = results[2];
        break;

      case 'REPORT':
        console.log(`The robot is in position x:${robot.position.x} y:${robot.position.y} and is facing ${robot.position.direction}`);
        break;

      default:
        robot.position.direction = helperFunctions.turnRobot(robot.position.direction, inputArray[0]);
    } 
  }
}
module.exports = robot;

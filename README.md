# Command line Robot
A little application that will simulate a toy robot walking around on a table. 
# Installation
Node is required for this application to work.
1. In your targeted folder, run "git clone https://github.com/ericheinmiller/robot.git"
2. Go into the robot folder and run "node app.js".

Now you can type commands to move the robot.

# Commands
Just type these commands into node after running robot.js. It's important that the commands are all properly capitalized and spelled correctly for it to work. For the PLACE command, either commas or spaces can be used to separate arguments.

* PLACE X,Y,F

    PLACE will put the robot on the table in position X,Y (maximum is 4 and 0,0 starts at the lower left corner) and facing NORTH, SOUTH, EAST or WEST.
    
    Example: PLACE 0,1,NORTH

* MOVE

   MOVE will tell the robot to move forward one increment on whatever direction it is facing.
   
* LEFT

    LEFT will tell the robot to turn left.
   
* Right

    RIGHT will tell the robot to turn right.
    
* REPORT

    REPORT will print the coordinates and what direction the robot is facing in.
    

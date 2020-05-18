Step 1: Clone the repository with the command 'git clone https://github.com/NickHolke/roomba.git' onto your computer.

Step 2: There is an empty file 'input.txt' in the roomba folder. Either copy and paste directions into this file or delete it
and add your own 'input.txt' file. The format of the file should be as follows:

5 5
1 2
1 0
2 2
2 3
NNESEESWNWW

- The first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
- The second line holds the hoover position
- Subsequent lines contain the zero or more positions of patches of dirt (one per line)
- The next line then always contains the driving instructions (at least one)

Step 3: Navigate inside the roomba folder in your terminal and enter 'node main.js' to run the program. 

# etch-a-sketch

In this project we' re going to build a browser version of something between a sketchpad 
and Etch-A-Sketch. To do that we' re gonna need to build a grid of squares. Every time the
pointer of the mouse (or the finger, in case of a touchscreen) hovers over these squares,
they are going to change color. The user will have the chance to clear the grid and start
over the "drawing", and will be able to change the grid size. Meaning, they will be
able to decide the number of the squares that consist the grid. 

To be able to build this "game", I started by creating a html and css file (index.html and 
style.css). After that I started adding some interactivity by creating the script.js file.

First I built a square of a fixed size by using html and styled it by using css. I wrote
two different texts in it. The first text, with the class "desktop", will show if we don't
have a touchscreen. The second text, with the class "touch", will show when we do have a
touchscreen. I also made this square responsive, meaning that it will change size
depending on the size of the viewport (or screen).

After finishing up working on the squares, I started working on the grid of squares. The 
grid of squares will be inside the square that I built using HTML & CSS. But they are 
created using JavaScript and the DOM, and they don't have a fixed size. Their size changes
according to the size of the square they' re contained in.

After finishing with the grid, I started thinking of ways on how to make these grid squares
change color once the pointer of the mouse hovers over them. This turned out to be a little
more difficult than I initially thought, and thus it took me a couple of hours to figure 
it out. What took me way more though, to figure out, although it appears to be easier, is 
how to make those grid squares change their size dynamically, according the the size of the
container square.

Now, this project is not finished, it's a work in progress. But this is what I' ve built so
far. As soon as I build something else for this project or add some other functionality I
will come back here and update README.md file.
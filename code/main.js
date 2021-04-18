/*Grab a reference to the div, and then grab the width and height of the viewport (the inner window, where your document is displayed) and store them in variables — these two values are handily contained in the Window.innerWidth and Window.innerHeight properties. */

const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight =window.innerHeight;

/*Dynamically alter the width and height of the div to equal that of the viewport.*/

div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';
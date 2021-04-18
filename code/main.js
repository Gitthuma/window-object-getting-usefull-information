/*First of all, let's grab a reference to the div, and then grab the width and height of the viewport (the inner window, where your document is displayed) and store them in variables — these two values are handily contained in the Window.innerWidth and Window.innerHeight properties. */

const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight =window.innerHeight;
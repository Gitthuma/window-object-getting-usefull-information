Active learning: Getting useful information from the Window object

So far we've only really looked at using Node and Document features to manipulate documents, but there is no reason why you can't get data from other sources and use it in your UI. You just have to make sure your data is in the right format; JavaScript makes it easier than many other languages, being weakly typed — for example numbers will convert to strings automatically when you want to print them to the screen.

In this example we will solve a common problem — making sure your application is as big as the window it is viewed in, whatever size it is. This is often useful in situations like games, where you want to use as much of the screen area as possible to play the game in.

To start with, make a local copy of our window-resize-example.html and bgtile.png demo files. Open it and have a look — you'll see that we've got a &lt;div&gt; element covering a small part of the screen, which has got a background tile applied to it. We'll use that to represent our app UI area.

Ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

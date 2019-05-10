# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

I will try to explain it in short steps listed
1- The browser of the client makes the request to the browser of the server.
2- This browser finds the real address of the site and sends a copy of the page to the client.
3- Once sent, the client's browser receives the content in small data packages.
4- And finally shows on screen what the client requested.
5- There are factors such as DNS, TCP / IP, HTTP, data packets etc.

## From start to finish, how does data reach you to be rendered in the browser?

The data packets are sent in small pieces for better functioning of the web by the server and these are redirected by the router to the requesting computer (client), the browser analyzes them and shows them.

## What code is rendered in the browser?

Code HTML, this This code is interpreted by the browser according to the specifications of CSS and HTML.

## What is the server-side code’s main function?

Execute scripts that with the help of a good programming language (PHP) can extract data from a database and integrate them into the web project.

## What is the client-side code’s main function?

Validate some data through scripts on the client side before being sent to the server. In this way you can have reports of immediate errors.

## What is runtime?

Es el tiempo que tarda un programa en ejecutarse en el sistema operativo.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

If we see the instances as elements that form a Web page, an instance is created for each element that is part of the page that is being displayed in the browser, that is, an instance of each image that is displayed, an instance of each code JS, CSS to which reference is made and an HTML document that organizes them all.

## How many instances of the server-side code are available at any given time?

In the server there is only one instance of each element and it sends a copy of each element that makes up a requested Web page.

## How many instances of the databases connected to the server application are created?
For each connection of a client to the database, an instance of that connection is created

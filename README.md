# DOM (Document Object Model)

- allows programming languages to interact with the webpage
- each item in the DOM is known as a node

## Data Flow

- initial load of the HTML
- user interaction
- change the data behind the scenes based on the user interaction
- use the updated data to change the UI
- Repeat from step 2

## DOM Selector

- ways we can grab nodes (elements) from the DOM
- document.querySelector('CSS Selector');
  - grab the first element that matches the CSS Selector
  - single element
- document.querySelectorAll('CSS Selector');
  - grab all of the elements that match the CSS Selector
  - comes back as a NodeList (array-like object === not exactly the same as an array)

- OLDER options
  - document.getElementsByTagName('tagName')
  - document.getElementById('id')
  - document.getElementsByClassName('className')

## Making a new array

- [...originalArrayName]
- spread operator

## DOM Manipulation

- document.createElement('elementName')
  - creates a new element
  - DOES NOT put the element on the page
- append
  - puts an element onto the page inside of another element

## Events

- a signal that something has occured in the browser
  - mouse click
  - button click
  - form submission
  - timer
  - page being loaded

## Event Listener

- element.addEventListener('eventName', (event) => { code })
- attaches an event to an event handler

## Event Handler

- a function that runs when a specified event is triggered
- event.target is the most specific (child) element that triggered the event

## Form Submission

- by default will refresh the page
- event.preventDefault() stops the page from refreshing

## Set Interval and Clear Interval

- setInterval -> used to repeatedly tun code based on a passed in timer
- used to stop a setInterval
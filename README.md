1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById : Returns the element with the specified ID.

getElementsByClassName : Returns all elements with the specified class as an HTMLCollection.

querySelector : Returns the first element that matches a CSS selector (id, class, tag).

querySelectorAll : Returns all elements that match a CSS selector as a NodeList.

2. How do you create and insert a new element into the DOM?
Ans:
let newDiv = document.createElement("div");
newDiv.innerText= "Hello World!";
document.body.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?
Ans:
It is a technique where an event happens first on the target element and then jump up to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:It is a technique where we do not need to add event listeners to all child elements. Instead we add one event listener to the parent element to control all of them.It is useful because its reduces code repetition,saves time and improve performance .

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() : It stops browser default behaviour only but it  does not stop event bubbling/capturing

stopPropagation() : It stops event bubbling/capturing only but it does not stop browser default behaviour.


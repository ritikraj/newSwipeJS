# newSwipeJS
detect the single-touch swipe direction


Usage:

Step 1 : call the Swipe() function with the element you want to track the single-touch directions

// JS

var el = document.querySelector('.element');

new Swipe( el );

// jQuery - it takes the first element of the jQuery Object (i.e, el[0] ). Use jQuery .each() to apply on all objects

var $el = $(".element");

new Swipe( el );

Step 2 : newSwipeJS emits event for all four directions - up, down, left & right as swipedUp, swipedDown, swipedLeft, swipedRight. You can track all the events the same way you track click, touchstart etc.

// JS
el.addEventListener("swipedUp", function () {
     // do anything when swiped up.
}, false);
   
// jQuery   
$el.on("swipedDown", function () {
    // do anything when swiped down.
});


Step 3 : [OPTIONAL] Swipe() accepts an optional options 'object'

// JS
new Swipe( el, {
            preventDefaultBehavior: true,
            swipeX: false,
            swipeY: true
});

a. preventDefaultBehaviour = default value is true. When set to true, it prevent all defaul actions while swiping. (e.g: touchstart, click, scrolling in the direction etc)
b. swipeX = default value is true. When true, detects swiping in the X direction.
c. swipeY = default value is true. When true, detects swiping in the Y direction.

Enjoy!!

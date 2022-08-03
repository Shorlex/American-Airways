/***************Flight Booking Form***************/
// grab all the buttons
let Buttons = document.querySelectorAll(".btn");

// loop through the buttons using for..of 
for (let i = 0; i < Buttons.length; i++) {
  // listen for a click event 
  Buttons[i].addEventListener('click', (e) => {
    // et = event target
    const et = e.target;
    // slect active class
    const active = document.querySelector(".btn-light");
    // check for the button that has btn-light class and remove it
    if (active) {
      active.classList.remove("btn-light");
    }
    // add btn-light class to the clicked element 
    et.classList.add("btn-light");
    
    // select all classes with the name content
    let allContent = document.querySelectorAll('.flight');

    // loop through all content classes
    for (let y = 0; y < allContent.length; y++) {
      // display the content if the class has the same data-attribute as the button 
      if(allContent[y].getAttribute('data-number') === Buttons[i].getAttribute('data-number')) {
        allContent[y].style.display = "block";
       }
      // if it's not equal then hide it.
      else {
        allContent[y].style.display = "none";
       }
     }
  });
}

/***************Page Scroll Effect*****************/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
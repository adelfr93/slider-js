// Get slider items / Array.from
const itemsSlider = Array.from(document.querySelectorAll(".slider-container img"));

// Get numbers of sliders
const numberSlides = itemsSlider.length;

// Set current slide
let currentSlide = 1;

// Slide Number Element
const numberElement = document.getElementById("slide-number");

// create the main ul element
const paginationElement = document.createElement("ul");

// set id on crated element id = pagination-ul
paginationElement.setAttribute('id','pagination-ul');

// create list items vased on slides count / with for with attr data-index / text i / Append items to the main Ul list
for(let i=1;i<=numberSlides;i++){
    // create li
    let paginationItem = document.createElement("li");
    //set attribute
    paginationItem.setAttribute('data-id',i);
    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    //Append item to the ul
    paginationElement.appendChild(paginationItem);
}

// Append the created element to the page ti class to indicators
document.getElementById("indicators").appendChild(paginationElement);

// Previous and Next Button
const prevBouton = document.querySelector(".slider-controls .prev");
const nextBouton = document.querySelector(".slider-controls .next");

prevBouton.onclick = prevSlide;
nextBouton.onclick = nextSlide;

// Get the new created Ul
var PaginationCreatedUl = document.getElementById('pagination-ul');

// get array from PaginationCreatedUl
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// handle checker
theChecker();

// Handle clicks previous and next boutons 
function prevSlide(){
   
    if(prevBouton.classList.contains("disabled")){
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
    
}

function nextSlide(){
    if(nextBouton.classList.contains("disabled")){
        return false;
    }else{
        currentSlide++;
        theChecker();
    }
}

//loop through all bullets items and add event click
for(let i=0;i<paginationsBullets.length;i++){
    paginationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-id'));
        theChecker();
    }
}

// Create the checker Function
function theChecker(){
    //set the slide number
    //numberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (numberSlides);
    numberElement.textContent = `Slide #${currentSlide} of ${numberSlides}`;

    removeAllActive();

   // Set Active class on current slide
   itemsSlider[currentSlide - 1].classList.add('active');

   // set active class on pagination item
   PaginationCreatedUl.children[currentSlide - 1].classList.add('active');

   // check if current slide is first
   (currentSlide === 1) ? prevBouton.classList.add("disabled") : prevBouton.classList.remove("disabled");

   //check if current slide is last
   (currentSlide === numberSlides) ? nextBouton.classList.add("disabled") : nextBouton.classList.remove("disabled");
}

// remove active class from images and pagination
function removeAllActive(){
    
    //Loop all images
    itemsSlider.forEach((img)=> img.classList.remove('active'));

    // loop all paginations
    paginationsBullets.forEach((bullet)=>bullet.classList.remove('active'))
}


/* Step 1 find the element */
var square = document.getElementById('square');

/* Step 2 Write the behaviour */
function changeColour(colour) {
    square.style.background = colour;
}

/* create function taht workes when it is clicked */
function clicked() {
    words.innerHTML = "Build a <br>" + createBuzzwordPhrase();
}

square.addEventListener('click', (event) => clicked());

/* create hover function */
square.addEventListener('mouseover', (event) => changeColour('grey)'));
square.addEventListener('mouseout',  (event) => changeColour('red)'));

var words = document.getElementById('words');
/* Add function to display greeting */
function greeting() {
    words.innerHTML = "Welcome to Flatland <br> I am Square!"
}
/* Output the greeting once the screen has open as first screen page */
document.onload = greeting()

function createBuzzwordPhrase() {
    /* URL for list of busswords: https://en.wikipedia.org/wiki/List_of_buzzwords */
    /* assign words for each catagory: buzz, action and outcome */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];
    /* use random function to select 1 word from each catagory: buzz, action and outcome */
    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

/* Step 3 link to event handler */
console.log(createBuzzwordPhrase() )
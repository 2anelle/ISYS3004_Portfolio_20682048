/* functions to handle the element/event */
function addRSStoDOM(data) {
  /* Create the 'outer' container to hold everything */
  let itemsContainer = document.createElement('DIV');

  /* for each item add a title, link, and description */
  for (let i = 0, t = data.items.length; i < t; ++i) {
    let item = data.items[i];  // get the item
    /* create a element to contain, title, link, description */
    let itemContainer = document.createElement('DIV');

    /* create and update the link element */
    let itemLinkElement = document.createElement('A');
    itemLinkElement.setAttribute('href', item.link);
    itemLinkElement.innerText = item.title;

    /* create and update the title (use link as title, so title is clickable) */
    let itemTitleElement = document.createElement('H2');
    itemTitleElement.appendChild(itemLinkElement);

    /* create and update the description */
    let itemDescriptionElement = document.createElement('P');
    itemDescriptionElement.innerHTML = item.description;

    /* elements have been updated, add each to the inner container */
    itemContainer.appendChild(itemTitleElement);
    itemContainer.appendChild(itemDescriptionElement);

    /* add inner container to outer container */
    itemsContainer.appendChild(itemContainer);
  }

  /* build a title RSS source */
  let titleElement = document.createElement('H1');
  titleElement.innerText = data.feed.title;

  /* add RSS titles, and a container of article summaries to the main DOM */
  content.appendChild(titleElement);
  content.appendChild(itemsContainer);
}

var content = document.getElementsByTagName('main')[0]

/* function to interect with the server (function: convert RSS to JSON) */ 
/* web page will update after receiving RSS URL and converting it to JSON (retrieve data from URL without refreshing page) */ 
var xhr = new XMLHttpRequest()
xhr.onload = function(){
  if (xhr.status >= 200 && xhr.status < 300){
    json = JSON.parse(xhr.responseText)
    console.log(json)
    addRSStoDOM(json)

  }else{
    /* if URL inserted does not work, auto output of message below */ 
    console.log("The request failed.")
    content.innerHTML = "The request failed, please check your RSS URL."
  }
}
/* test this website: https://rss.slashdot.org/Slashdot/slashdotMain */
/* open console on dev tools on microsoft edge */

/* gets the ADD RSS button to work */ 
let addFeedButton = document.getElementById("add-feed");
let newRSSInput = document.getElementById("rss-input");

/* Every added a task is saved in the local storage */
function onAddRSSClicked(event) {
  let URL = newRSSInput.value;
  newRSSInput.value = "";
  
  /* create and send a GET request */ 
  /* first argument is the post type (GET, POST, PUT, DELETE, etc.) */
  xhr.open('GET', 'https://api.rss2json.com/v1/api.json?rss_url=' + URL);
  /* second argument is the endpoint URL */
  xhr.send();
}

/* add the event listener */ 
addFeedButton.addEventListener('click', onAddRSSClicked);
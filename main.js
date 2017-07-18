// 1. First, find our UL Container
let container= document.querySelector(".data");

//The title of the UL
const title = "The Basics";

// Create our Ajax Request
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/PhilCodeIY");
req.addEventListener("load", reqListener);
req.send();

function reqListener () {
  //parse response data and store in variable called data
  let data = JSON.parse(this.responseText);
  let list = "";

  //Set the title
  theUL = `<h2>${title}</h2>`;

//open the UL
    theUL += "<ul>;"
//Build the list of basic information pull from git hub

    let basics;
      basics += "<ul>";
      container.forEach( function (thebasics) {
//  list the items in the li
  list += `<li>${thebasics}</li>`;
});
//close the ul
template += "</ul>";

// the fields
// let data.name = "name";
// let data.bio = "bio";
// let data.html_url = "html_url";
// let data.email = "email";
// let data.company = "company";
// let data.blog; "blog";
// let data.avatar_url; "avatar";


  //loop is over, add all <li>'s to the character container
    container.innerHTML = template;
  }

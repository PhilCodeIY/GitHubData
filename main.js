// 1. First, find our UL Container
let container= document.querySelector(".data");

  //let container2 = document.querySelector(".bio")
//add another querySelector for the story:

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

//open the UL
    list += "<ul class='characters'>" ;
//Build the list of basic information pull from git hub

    // let basics;
    //   basics += "<ul>";
    //   container.forEach( function (thebasics) {
//  list the items in the li
    list += `<li>Name: <span> ${data.name}</span></li>`;
    list += `<li class="URL">Github URL: <a href ="${data.html_url}"> GitHubUserName</a></li>`;
    list += `<li class="email">Email: <a href="mailto:pls89144@gmail.com">pls89144@gmail.com</a></li>`;
    list += `<li>Website: <span>${data.blog}</span></li>`;

//close the ul
    list += "</ul>";
//add all <li>'s to the character container
    container.innerHTML = list;

// add bio info to the story div
//.bio is the class for container2
let story = document.querySelector(".bio");
//bio is the class within the  container2 div
  let bio =""
      bio = `
    <div class="story">
      <p><blockquote>Bio: ${data.bio}</blockquote></p>
    </div>`;

      story.innerHTML = bio ;
      //.img is the class for continer3
    let picture = document.querySelector(".img");

    let img =""
        img = `
      <div class="pic">
          <img src = "${data.avatar_url}">
      </div>`;

      picture.innerHTML = img ;
  }

---
layout: page
title: About
permalink: /about/
---

Creator of Student 2025

Here are places I have been to:

<comment>
Flags are made using Wikipedia images
</comment>

<style>
    /* Style looks pretty compact, trace grid-container and grid-item in the code */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
        font-size: 15px;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
    
    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    
var living_in_the_world = [
    {"flag": "4/41/Flag_of_India.svg", "description": "India - Where my parents are from. I enjoyed exploring the different foods they offered in addition to culture. Also met most of my relatives there."},
    {"flag": "f/f3/Flag_of_Switzerland.svg", "description": "Switzerland - I liked the view of the area. The mountainous peakes and medival look made the place lively. "},
    {"flag": "e/ef/Flag_of_Hawaii.svg", "description": "Hawaii - My favorite vacation place, I loved the different hikes and view of the mountains, and my favorite island has to be Mowi."},
    {"flag": "1/1a/Flag_of_New_York.svg", "description": "New York - Enjoyed the views from the Empire State Building and the Statue of Liberty. The food there was incredible such as the pizza and pasta"},
    {"flag": "0/01/Flag_of_California.svg", "description": "California - Ive lived here my entire life, there isn't much to say about it."}
];
 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

## Hobbies that are important to me
- Reading
- Spending Time With Family
- Playing Video games
- Hanging out with friends
- Practicing Badminton 

## Books that I have read

<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/thegiver.jpg" alt="The Giver">
  <img src="{{site.baseurl}}/images/about/farenhright451.png" alt="Farenheight 451">
  <img src="{{site.baseurl}}/images/about/harrypotter1.jpg" alt="Harry Potter - Order of the Stone">
  <img src="{{site.baseurl}}/images/about/sorcerersstone.jpg" alt="Harry Potter - Sorcerer's Stone">
  <img src="{{site.baseurl}}/images/about/mazerunner.jpg" alt="Maze Runner">
</div> 

<div id="utterances-comments"></div>
<script async src="https://utteranc.es/client.js"
repo="PratheepNatarajan/pratheep_blog"
issue-term="title"
theme="github-light"
crossorigin="anonymous">

</script>
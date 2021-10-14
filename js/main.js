<<<<<<< HEAD
// import statements have to go at the top
import { getData } from "./components/TheDataMiner.js";

(() => {
    const   theTeam = document.querySelector("#team-members"),
            theTemplate = document.querySelector("#bio-template").content;

    function buildTeam(info) {
        info.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            // add the custom data attribute value to the section tag inside the template
            panel.firstElementChild.dataset.key = person.id;

            memberInfo[0].querySelector('img').src = `images/${person.biopic}`;
            // memberInfo[1].textContent = person.name;
            // memberInfo[2].textContent = person.role;
            // memberInfo[3].textContent = person.nickname;

            // put the virtual panel in the team section in our HTML page
            theTeam.appendChild(panel);
        })
    }

    function getMoreData(event) {
        if (event.target.closest("section").dataset.key) {
            let key = event.target.closest("section").dataset.key;

            // getData({id: key}, function(data) {
            //     // execute this line as the callback in DataMiner
            //     console.log(data);
            // })

            getData({id: key},  showPortfolioData);
        }
    }

    function showPortfolioData(data) {
        // show the portfolio piece somewhere in your UI
        console.log(data);
    }

    // when we click on a bio panel, we want to retrieve the custom data attribute that refers to the row of data that represents this person in the DB
    // we then pass that ID to our data miner, which in turn passes it to index.php as the query string parameter
    theTeam.addEventListener("click", getMoreData);

    // pass the buildTeam function to our data miner as a callback
    getData(null, buildTeam);
})()
=======
(() => {
    const   theTeam = document.querySelector("#teamSection"),
            theTemplate = document.querySelector("#bio-template").content;

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {
                console.log(data);

                buildTeam(data);
            })
        .catch(error => console.error(error));
    }

    function buildTeam(info) {

        // grab the keys from the data object (the names)
        const people = Object.keys(info);

        people.forEach(person => {
            let panel = theTemplate.cloneNode(true); // make a copy of the template content
            let containers = panel.firstElementChild.children; // get a reference to the template content

            // cycle through the child elements inside the <section> tag in the <template> tag
            // and update their attributes 
            
            // add the image
            containers[0].querySelector("img").src = `images/${info[person].biopic}`;

            // update the text
            containers[1].textContent = info[person].name;
            containers[2].textContent = info[person].role;
            containers[3].textContent = info[person].nickname;

            theTeam.appendChild(panel);
        });

    }

    getData();
})();
>>>>>>> b4349ef4112c37bc14b9b56e6b5b40fdab302ff6

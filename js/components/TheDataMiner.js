function getData(cb) {
    // use the Fetch API to retrieve some data
    fetch("./includes/functions.php")
    .then(res => res.json()) // unpack the API response (turn it back into plain JS)
    .then(data => {
        // do anything else here that we want with our data
        // call a function to generate our dynamic content
        cb(data[0]);
    })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }
function getData(params, cb) {
    // use the Fetch API to retrieve some data
    let baseURL = "./includes/index.php";
    
    if (params) {
        let keys = Object.keys(params);
        let newQStringParams = keys.map(key => `${key}=${params[key]}`).join("&&");

        baseURL += `?${newQStringParams}`;        
    }

    fetch(baseURL)
    .then(res => res.json()) // unpack the API response (turn it back into plain JS)
    .then(data => {
        // do anything else here that we want with our data
        // call a function to generate our dynamic content
        cb(data[0]);
    })
    .catch(error => console.error(error)); // catch and report any errors
}

export { getData }
console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
    type: 'GET',
    url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
    success(data) {
        console.log("We have your weather!")
        console.log(data.weather[0]["main"]);
    },
    error() {
        console.error("An error occurred.");
    },
});

console.log("testing something")
// Add another console log here, outside your AJAX request

// When does the request get sent? after index.js is loaded
// When does the response come back? after index.js is loaded
// What's the current weather in New York? Raining as of 8/14 12:06am pst
// Did the page refresh? no
// How could we use different HTTP methods in our request? Can use POST like:

// $.ajax({
//     url: '/cats',
//     type: 'POST',
//     data: formData,
//     success() {
//         console.log('Your callback here!');
//     }
// })
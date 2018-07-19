/*
MdElZgkZIMzxYPSnyM2K0PYiQZZZ5Rks

api.giphy.com/v1/stickers/search

http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=MdElZgkZIMzxYPSnyM2K0PYiQZZZ5Rks
*/

// 	var api = "http://api.giphy.com/v1/gifs/search?";
// 	var keyword = "q=rainbow";
// 	var apikey = "&api_key=MdElZgkZIMzxYPSnyM2K0PYiQZZZ5Rks";
// 	var limit = "&limit=5";


// function setup()
// {
// 	noCanvas();
// 	var url = api+keyword+apikey+limit;
// 	loadJSON(url,gotdata);

// }
// function gotdata(giphy)
// {
// 	createImg(giphy.data[0].images.original.url);
// }


$.getJSON('http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=MdElZgkZIMzxYPSnyM2K0PYiQZZZ5Rks', function(giphy) { // Get data from JSON file
for (var i in giphy.data) {
    var output+=giphy.data[i].images.original.url; // Place image in variable output
}
document.getElementById("banner-img").innerHTML=output;});

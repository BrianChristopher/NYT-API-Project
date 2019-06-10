//This is the example
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey


//This it the API key  
//W7p63YxABy6Wr7IKJtHaPQdw62SRDerZ
var APIKey = "W7p63YxABy6Wr7IKJtHaPQdw62SRDerZ";

//This is the search term
var search = "cats";

//This is the queryURL
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + APIKey;

//This is the AJAX call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    console.log(response.response.docs);
    var results = response.response.docs;

    console.log(results[0].snippet);
    console.log(results[1].snippet);


});
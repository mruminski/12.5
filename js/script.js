var tweetLink = "https://twitter.com/intent/tweet?text=";
var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

var getData = function() {
  fetch(url, { cache: 'no-store'})
  .then(function(response) {
    return response.json();
  })
  .then(prepareTweet);
}
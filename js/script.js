var tweetLink = "https://twitter.com/intent/tweet?text=";
var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

document.addEventListener('DOMContentLoaded', function() {
  getData();
  document.querySelector('.container__button')
  .addEventListener('click', function() {
    getData();
  });
});

var prepareTweet = function(input) {
  if (Array.isArray(input)) { var data = input[0]; }
  var element = document.createElement('div');
  element.innerHTML = data.content;
  var quote = element.innerText.trim();
  var author = data.title;

  if (!author.length) { return 'Unknown author' };
  var toTweet = 'Quote: ' + quote + ' by ' + author;
  var tweetLen = toTweet.length;

  if (!(tweetLen > 280)) {
    var msg = tweetLink + encodeURIComponent(toTweet);
    document.querySelector('.container__quote').innerText = quote;
    document.querySelector('.container__author').innerText = 'by: ' + author;
    document.querySelector('.container__tweet').setAttribute('href', msg);
  }
}

var getData = function() {
  fetch(url, { cache: 'no-store'})
  .then(function(response) {
    return response.json();
  })
  .then(prepareTweet);
}
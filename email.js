/* Writes the email address into the page when it loads, so that the address
   never appears in the HTML source where address-harvesting bots can find it.

   Any link with class="email-link" becomes a mailto: link. Adding
   data-show-address="true" also makes that link display the address itself,
   rather than the word "Email".

   To change the address, edit the two values on the next line. Nothing else
   on the site needs changing. */

(function () {
  var user = "seanmgolder", host = "gmail.com";

  var address = user + "@" + host;
  var links = document.querySelectorAll("a.email-link");
  for (var i = 0; i < links.length; i++) {
    links[i].href = "mailto:" + address;
    if (links[i].getAttribute("data-show-address") === "true") {
      links[i].textContent = address;
    }
  }
})();

var customerName = prompt("Please enter your name",);
if (customerName!= null) {
    document.getElementById("welcome").innerHTML =
    "Hello " + customerName + "! How are you today?";
}

var r = confirm("Are you sure you typed your name right");

var rating = prompt("What would you rate the look of this website",);
var rating = prompt("do you think this website will be helpful?",);

if (rating!= null) {

    document.getElementById("rate").innerHTML =

    "Thanks for the information";
    "When asked if you thought the website would be helpful you said " + rating;
}

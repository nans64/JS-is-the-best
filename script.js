///////////////////////
// FONCTIONALITE 1
///////////////////////
// document.addEventListener("click", function(){
//    document.getElementsByTagName("footer").innerHTML = console.log("Hello World!");
// });

// Count the number of clicks
// A FAIRE  "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
// A FAIRE addEventListener("click", function(){ } format

var clicks = 0; // counter
var a = document.getElementsByTagName('footer'); // element
a[0].onclick = function(b) { // onclick not onClick
    console.log(++clicks); // increment it
}

a[0].ondblclick = function(){
    alert(clicks); // double click to know the number of clicks so far
}

///////////////////////
// FONCTIONALITE 2
///////////////////////

var coll = document.getElementsByClassName("navbar-toggler");

    coll[0].addEventListener("click", function() {
        var element = document.getElementById("navbarHeader");

        if (element.classList[1] == "collapse") {
            element.classList.remove("collapse");
            console.log(element.classList)

        }
        else if (element.classList[0] == "bg-dark") {
            element.classList.add("collapse");
            console.log(element.classList)
        }

        else {
            element.classList.remove("collapse");
            console.log(element.classList)

        }
    });

///////////////////////
// FONCTIONALITE 3
///////////////////////

var button = document.getElementsByClassName('btn btn-sm btn-outline-secondary'); // element

button[0].addEventListener("click", function() {
    var text = document.getElementsByClassName("card-text");
    text[0].style.color = "#ff0000";

});

///////////////////////
// FONCTIONALITE 4
///////////////////////


button[1].addEventListener("click", function() {
    var text = document.getElementsByClassName("card-text");

        if (text[1].style.color === 'green') {
            text[1].style.color = '';
        }

        else {
            text[1].style.color = "green";

        }
    });

///////////////////////
// FONCTIONALITE 5
///////////////////////

var header = document.getElementsByTagName('header'); // element

header[0].ondblclick = function(){
    var head = document.getElementsByTagName('link'); // element

    if (head[0].href == 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
        head[0].href="";
    }

    else {
        head[0].href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
}
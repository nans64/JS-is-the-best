///////////////////////
// FONCTIONALITE 1
///////////////////////

var a = document.getElementsByTagName('footer'); // element
var clicks = 0; // counter

a[0].addEventListener("click", function() {
    console.log(++clicks); // increment it
});



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
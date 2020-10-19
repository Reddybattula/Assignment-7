/*eslint-env browser*/

    //STEP 1
function message() {
    "use strict";
    window.alert("I have been clicked");
}

function init() {
    "use strict";

//STEP 2
var myElement = window.document.getElementById("mybutton");
myElement.onclick = function () {
    "use strict";
     window.alert("I have been clicked");
};

//STEP 3
var eve = window.document.getElementById("eventButton");
/*
eve.addEventListener("click", "listenFunction");
function listenFunction() {
    "use strict";
    window.alert("I have been clicked");
}
*/
//STEP 4
eve.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});
}

//STEP 5
window.addEventListener("load", init);





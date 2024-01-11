"use strict";

window.onload = init;

function init() {

    //hämta knapparna
    const expanderBtn = document.getElementsByClassName("expanderBtn");

    //lägger en händeslelyssnare på varje knapp
    for (let i = 0; i < expanderBtn.length; i++) {
        expanderBtn[i].addEventListener('click', function () {
            //hämtar in nästa element vilket blir p-elementet efter 
            let textExpand = this.nextElementSibling;

            //kontroll om p är synlig
            if (textExpand.style.display === "block") {
                //är den synlig döljs den med css
                textExpand.style.display = "none";

              

            } else {
                //p visas
                textExpand.style.display = "block";


            }
        })
    }
}
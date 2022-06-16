(function () { 
    "use strict"
    var modalForm=document.getElementById("login-form")
    modalForm.addEventListener("submit", function (evt) {
        evt.preventDefault()
        document.querySelector(".modal-body").innerHTML="<h5>Oops!!! <br> Sorry, webpage is still under development</h5>"       
    })
 }());
(function () {
  "use strict";

  // Login submission
  const modalForm = document.getElementById("login-form");

  modalForm.addEventListener("submit", function (evt) {

    evt.preventDefault();

    document.querySelector(".modal-body").innerHTML ="<h4>Oops!!! <br> Sorry, webpage is still under development</h4>";

  });

  // show and hide password
  const showPasswordBtn = document.querySelector(".p-eye");

  showPasswordBtn.addEventListener("click", function () {
    const password = document.querySelector(".pass-w");

    const showPasswordIcon = document.querySelector(".eye-icon");

    if (showPasswordIcon.classList.contains("bi-eye")) {
      showPasswordIcon.classList.remove("bi-eye");

      showPasswordIcon.classList.add("bi-eye-slash");

      password.removeAttribute("type");

    } else if (showPasswordIcon.classList.contains("bi-eye-slash")) {

      showPasswordIcon.classList.add("bi-eye");

      showPasswordIcon.classList.remove("bi-eye-slash");

      password.setAttribute("type", "password");
    }
  });

  //   add product to cart

  var Add2CartBtn = document.querySelectorAll(".cart-btn");

  for (let i = 0; i < Add2CartBtn.length; i++) {

    var NumberOfItemInCart = 0;

    Add2CartBtn[i].addEventListener("click", function () {

      var Add2Cart = this;

      var item = Add2Cart.parentElement.parentElement.parentElement;

      var itemClone = item.cloneNode(true);

      var cart = document.querySelector(".cart-body");

      var cartItem = cart.appendChild(itemClone);


      // Number of item in cart
      NumberOfItemInCart++;
    
      var cartBadge = document.querySelector(".cart-badge");

      cartBadge.classList.remove("visually-hidden");

      cartBadge.innerHTML = NumberOfItemInCart;

      if (NumberOfItemInCart > 9) {
        cartBadge.innerHTML ="9+";
      }
      
      // Remove First Description in Cart
      var cart1Text=document.querySelector("#cart1text")

      cart.removeChild(cart1Text);

    });
  }
  
})();


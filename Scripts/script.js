(function () {
  "use strict";

  // Login submission
  const modalForm = document.getElementById("login-form");

  modalForm.addEventListener("submit", function (evt) {
    // prevent submission of form
    evt.preventDefault();

    // Update the form modal with text
    document.querySelector(".modal-body").innerHTML =
      "<h4>Oops!!! <br> Sorry, webpage is still under development</h4>";
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

  //   add product to cart && Remove product from Chart

  var Add2CartBtn = document.querySelectorAll(".cart-btn");

  for (let i = 0; i < Add2CartBtn.length; i++) {
    var numberOfItemInCart = 0;

    var cartBadge = document.querySelectorAll(".cart-badge");

    for (let i = 0; i < cartBadge.length; i++) {
      cartBadge[i].innerHTML = numberOfItemInCart;
    }

    Add2CartBtn[i].addEventListener("click", function () {
      // Remove First Description in Cart
      var cart1Text = document.querySelector("#cart1text");
      cart1Text.classList.add("visually-hidden");

      var Add2Cart = this;

      var item = Add2Cart.parentElement.parentElement.parentElement;

      var itemClone = item.cloneNode(true);

      itemClone.classList.add("col-12");

      var cart = document.querySelector(".cart-body");

      var removeItemBtn = itemClone.children[1].children[2].children[1];

      itemClone.children[1].children[1].classList.add("visually-hidden");

      itemClone.children[0].classList.add("product-img");

      removeItemBtn.innerHTML = "&#x2715 Remove";

      // Remove item in cart
      removeItemBtn.addEventListener("click", function () {
        numberOfItemInCart--;

        var item2Remove = this.parentElement.parentElement.parentElement;
        item2Remove.remove();

        var cartBadge = document.querySelectorAll(".cart-badge");

        for (let i = 0; i < cartBadge.length; i++) {
          cartBadge[i].innerHTML = numberOfItemInCart;
        }

        if (numberOfItemInCart == 0) {
          for (let i = 0; i < cartBadge.length; i++) {
            cartBadge[i].classList.add("visually-hidden");
          }

          var cart1Text = document.querySelector("#cart1text");

          cart1Text.classList.remove("visually-hidden");
        }
      });

      cart.appendChild(itemClone);

      // Number of item in cart
      numberOfItemInCart++;

      var cartBadge = document.querySelectorAll(".cart-badge");

      for (let i = 0; i < cartBadge.length; i++) {
        cartBadge[i].classList.remove("visually-hidden");

        cartBadge[i].innerHTML = numberOfItemInCart;
      }

      if (numberOfItemInCart > 9) {
        cartBadge.innerHTML = "9+";
      }
    });
  }

  // Switching toddler icon
  var Toggler = document.querySelector(".navbar-toggler");

  Toggler.addEventListener("mouseover", function () {
    // Change toggle button
    var togglerButton = document.querySelector(".toggler-btn");

    togglerButton.classList.remove("bi-list");

    togglerButton.classList.add("bi-filter-right");
  });

  Toggler.addEventListener("mouseout", function () {
    // Change toggle button
    var togglerButton = document.querySelector(".toggler-btn");

    togglerButton.classList.add("bi-list");

    togglerButton.classList.remove("bi-filter-right");
  });

  // animate icons
  var faIcons = document.querySelectorAll(".fa-solid");

  for (let i = 0; i < faIcons.length; i++) {
    faIcons[i].addEventListener("mouseover", function () {
      var iconToAnimate = this;

      iconToAnimate.classList.add("fa-beat");

      if (iconToAnimate.classList.contains("fa-bell")) {
        iconToAnimate.classList.remove("fa-beat");
        iconToAnimate.classList.add("fa-shake");
      }
      if (iconToAnimate.classList.contains("fa-compass")) {
        iconToAnimate.classList.remove("fa-beat");
        iconToAnimate.classList.add("fa-spin");
      }
    });

    faIcons[i].addEventListener("mouseout", function () {
      var iconToAnimate = this;

      iconToAnimate.classList.remove("fa-beat");
      if (
        iconToAnimate.classList.contains("fa-compass") ||
        iconToAnimate.classList.contains("fa-bell")
      ) {
        iconToAnimate.classList.remove("fa-shake");
        iconToAnimate.classList.remove("fa-spin");
      }
    });
  }

  var BootstrapIcons = document.querySelectorAll(".bi");
})();

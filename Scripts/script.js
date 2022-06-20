(function () {
  "use strict";

  // Login submission
  const LoginForm = document.getElementById("login-form");

  LoginForm.addEventListener("submit", function (evt) {
    // prevent submission of form
    evt.preventDefault();

    // Update the form modal with login error
    const showErrorMsg = document.querySelector(".login-error");
    showErrorMsg.classList.remove("visually-hidden");

    const LoginForm = document.getElementById("login-form");
    LoginForm.classList.add("visually-hidden");

    const closeLoginForm = document.querySelector(".close-loginForm");
    closeLoginForm.addEventListener("click", function () {
      const showErrorMsg = document.querySelector(".login-error");
      showErrorMsg.classList.add("visually-hidden");

      const loginForm = document.getElementById("login-form");
      loginForm.classList.remove("visually-hidden");

      // Clear the form data
      loginForm.reset();
    });
  });
  // sign up submission
  const SignUpForm = document.getElementById("Signup-form");

  SignUpForm.addEventListener("submit", function (evt) {
    // prevent submission of form
    evt.preventDefault();

    // Update the form modal with welcome msg
    const showWelcomeMsg = document.querySelector(".welcome");
    showWelcomeMsg.classList.remove("visually-hidden");

    const SignUpForm = document.getElementById("Signup-form");
    SignUpForm.classList.add("visually-hidden");

    const closeSignupForm = document.querySelectorAll(".close-SignUpForm");
    for (let i = 0; i < closeSignupForm.length; i++) {
      closeSignupForm[i].addEventListener("click", function () {
        const showWelcomeMsg = document.querySelector(".welcome");
        showWelcomeMsg.classList.add("visually-hidden");

        const SignUpForm = document.getElementById("Signup-form");
        SignUpForm.classList.remove("visually-hidden");

        // Clear the form data
        SignUpForm.reset();
      });
    }
  });

  // show and hide  login password
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

  // show and hide  sign up password
  const showPasswordBtn1 = document.querySelector(".p-eye1");

  showPasswordBtn1.addEventListener("click", function () {
    const password1 = document.querySelector(".pass-w1");

    const showPasswordIcon1 = document.querySelector(".eye-icon1");

    if (showPasswordIcon1.classList.contains("bi-eye")) {
      showPasswordIcon1.classList.remove("bi-eye");

      showPasswordIcon1.classList.add("bi-eye-slash");

      password1.removeAttribute("type");
    } else if (showPasswordIcon1.classList.contains("bi-eye-slash")) {
      showPasswordIcon1.classList.add("bi-eye");

      showPasswordIcon1.classList.remove("bi-eye-slash");

      password1.setAttribute("type", "password");
    }
  });

  // show and hide  sign-up confirm-password
  const showPasswordBtn2 = document.querySelector(".p-eye2");

  showPasswordBtn2.addEventListener("click", function () {
    const password2 = document.querySelector(".pass-w2");

    const showPasswordIcon2 = document.querySelector(".eye-icon2");

    if (showPasswordIcon2.classList.contains("bi-eye")) {
      showPasswordIcon2.classList.remove("bi-eye");

      showPasswordIcon2.classList.add("bi-eye-slash");

      password2.removeAttribute("type");
    } else if (showPasswordIcon2.classList.contains("bi-eye-slash")) {
      showPasswordIcon2.classList.add("bi-eye");

      showPasswordIcon2.classList.remove("bi-eye-slash");

      password2.setAttribute("type", "password");
    }
  });

  //   add product to cart && Remove product from Chart

  let Add2CartBtn = document.querySelectorAll(".cart-btn");

  for (let i = 0; i < Add2CartBtn.length; i++) {
    var numberOfItemInCart = 0;

    let cartBadge = document.querySelectorAll(".cart-badge");

    for (let i = 0; i < cartBadge.length; i++) {
      cartBadge[i].innerHTML = numberOfItemInCart;
    }

    // Add item to chart
    Add2CartBtn[i].addEventListener("click", function () {
      // Remove First Description in Cart
      const cart1Text = document.querySelector("#cart1text");
      cart1Text.classList.add("visually-hidden");

      // Number of item to display in cart badge
      numberOfItemInCart++;

      let cartBadge = document.querySelectorAll(".cart-badge");
      for (let i = 0; i < cartBadge.length; i++) {
        cartBadge[i].classList.remove("visually-hidden");
        cartBadge[i].innerHTML = numberOfItemInCart;

        if (numberOfItemInCart > 9) {
          cartBadge[i].innerHTML = "9+";
        }
      }

      //Clone item to be added to chart
      const Add2Cart = this;
      const item = Add2Cart.parentElement.parentElement.parentElement;
      const itemClone = item.cloneNode(true);
      itemClone.classList.add("col-12");

      // Hide item description
      itemClone.children[1].children[1].classList.add("visually-hidden");

      // resize item image
      itemClone.children[0].classList.add("product-img");

      // Append clone into the cart
      const cart = document.querySelector(".cart-body");
      cart.appendChild(itemClone);

      // alert user they have added item to cart
      const itemAddedTitle = itemClone.children[1].children[0].innerHTML;
      alert(`You have added ${itemAddedTitle} to your cart`);

      // create button to remove item from cart
      const removeItemBtn = itemClone.children[1].children[2].children[1];
      removeItemBtn.innerHTML = "&#x2715 Remove";

      // Remove item in cart
      removeItemBtn.addEventListener("click", function () {
        // Remove the item when remove button is created
        const item2Remove = this.parentElement.parentElement.parentElement;
        item2Remove.remove();

        // Reduce the number in the cart badge
        numberOfItemInCart--;

        let cartBadge = document.querySelectorAll(".cart-badge");
        for (let i = 0; i < cartBadge.length; i++) {
          cartBadge[i].innerHTML = numberOfItemInCart;

          if (numberOfItemInCart > 9) {
            cartBadge[i].innerHTML = "9+";
          }
        }

        if (numberOfItemInCart == 0) {
          for (let i = 0; i < cartBadge.length; i++) {
            cartBadge[i].classList.add("visually-hidden");
          }

          const cart1Text = document.querySelector("#cart1text");
          cart1Text.classList.remove("visually-hidden");
        }
      });
    });
  }

  // Switching menu toggler icon
  const Toggler = document.querySelector(".navbar-toggler");

  Toggler.addEventListener("mouseover", function () {
    // Change toggle button
    const togglerButton = document.querySelector(".toggler-btn");

    togglerButton.classList.remove("bi-list");

    togglerButton.classList.add("bi-filter-right");
  });

  Toggler.addEventListener("mouseout", function () {
    // Change toggle button
    const togglerButton = document.querySelector(".toggler-btn");

    togglerButton.classList.add("bi-list");

    togglerButton.classList.remove("bi-filter-right");
  });

  // animate icons
  let faIcons = document.querySelectorAll(".fa-solid");

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
      const iconToAnimate = this;

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

  // alert user to login and sign-up before buying product
  const buyBtn = document.querySelectorAll(".buy-btn");
  for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function () {
      alert(
        "Hello, esteemed customer. Please login or sign up to buy a product from our store"
      );
    });
  }
})();

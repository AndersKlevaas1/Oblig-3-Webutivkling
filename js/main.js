let x = document.querySelector(".hamburgernav");
        let hamburgerButton = document.getElementById("HamburgerMenu");

        hamburgerButton.addEventListener("click", (e) => {
            if (x.style.display === "block") {
                x.style.display = "none";
                hamburgerButton.setAttribute("aria-expanded", "false");
            } else {
                x.style.display = "block";
                hamburgerButton.setAttribute("aria-expanded", "true");
            }
        });

        
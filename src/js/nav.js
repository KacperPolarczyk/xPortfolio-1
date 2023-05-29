// let menu = document.querySelector("#menu");
// let navbar = document.querySelector(".hyperlinks");
// let hyperlink = document.querySelector(".hyperlink");

// menu.onclick = () => {
//   menu.classList.toggle("bi-x");
//   navbar.classList.toggle("open");
//   hyperlink.classList.toggle("close");
// };

const menu = document.querySelector("#menu");
const navbar = document.querySelector(".hyperlinks");
const allLinks = document.querySelectorAll("a:link");

menu.addEventListener("click", function () {
  menu.classList.toggle("bi-x");
  navbar.classList.toggle("open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      // Scroll back to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("hyperlink")) {
      menu.classList.toggle("bi-x");
      navbar.classList.toggle("open");
    }
  });
});

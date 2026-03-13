// auto active link
const currentPage = window.location.pathname.split("/").pop()
const linkss = document.querySelectorAll(".nav-links a")

linkss.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active")
  }
})


//gallary images
// window.onload = () => {
const fillerItem = document.querySelector(".items");
const listImg = document.querySelectorAll(".image");

// only run if .items exists on this page
if (fillerItem) {
  fillerItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {

      const currentActive = fillerItem.querySelector(".active");
      if (currentActive) currentActive.classList.remove("active");

      selectedItem.target.classList.add("active");

      let filterName = selectedItem.target.getAttribute("data-name");

      listImg.forEach((image) => {
        let filterImage = image.getAttribute("data-name");

        if (filterImage == filterName || filterName == "all") {
          image.classList.remove("show", "hide");
          void image.offsetWidth;
          image.classList.add("show");
        } else {
          image.classList.remove("show");
          image.classList.add("hide");
        }
      });
    }
  };
}
// };





// ── Active link
const links = document.querySelectorAll(".navbar .nav-links a");

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
const toggle = document.querySelector(".navbar .nav-toggle");
const navLinks = document.querySelector(".navbar .nav-links");
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

// ── Close menu helper
function closeMenu() {
  navLinks.classList.remove("open");
  toggle.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
}

// ── Mobile toggle
toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.contains("open");
  if (isOpen) {
    closeMenu();
  } else {
    navLinks.classList.add("open");
    toggle.querySelector('i').classList.replace('fa-bars', 'fa-xmark');
  }
});

// ── Hide on scroll down, show on scroll up
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  navbar.classList.toggle("scrolled", currentScrollY > 10);

  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    navbar.classList.add("hide");
    closeMenu();
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
}, { passive: true });



const accordion = document.getElementById('accordion');

accordion.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // Close all
    accordion.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
    }
  });

  // Keyboard support
  header.setAttribute('role', 'button');
  header.setAttribute('tabindex', '0');
  header.setAttribute('aria-expanded', 'false');

  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      header.click();
    }
  });
});

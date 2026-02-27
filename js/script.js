window.onload = () => {
  const fillerItem = document.querySelector(".items");
  const listImg = document.querySelectorAll(".image");

  fillerItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      fillerItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");

      listImg.forEach((image) => {
        let filterImage = image.getAttribute("data-name");

        if (filterImage == filterName || filterName == "all") {
          image.classList.remove("show", "hide");
          void image.offsetWidth; // 👈 force reflow — this restarts the animation
          image.classList.add("show");
        } else {
          image.classList.remove("show");
          image.classList.add("hide");
        }
      });
    }
  };
};
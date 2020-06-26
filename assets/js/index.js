const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("-active");
});

const escArea = document.querySelector(".esc-area");
escArea.addEventListener("click", () => {
  menu.classList.remove("-active");
});


const navArr = document.querySelectorAll(".nav-link");
const box = document.getElementById("burger-checkbox");

navArr.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    box.checked = false;
  });
});

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const changeBtn = document.querySelectorAll(".changebtn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

console.log(changeBtn);

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

changeBtn.forEach((btn) => {
  changeBtn[0].classList.add("btnbg");
  btn.addEventListener("click", (e) => {
    if (e.target === changeBtn[0]) {
      img1.classList.remove("sm:hidden");
      img2.classList.add("sm:hidden");
      img3.classList.add("sm:hidden");
      changeBtn[0].classList.add("btnbg");
      changeBtn[1].classList.remove("btnbg");
      changeBtn[2].classList.remove("btnbg");
    } else if (e.target === changeBtn[1]) {
      img1.classList.add("sm:hidden");
      img3.classList.add("sm:hidden");
      img2.classList.remove("sm:hidden");
      changeBtn[0].classList.remove("btnbg");
      changeBtn[2].classList.remove("btnbg");
      btn.classList.add("btnbg");
    } else {
      img1.classList.add("sm:hidden");
      img2.classList.add("sm:hidden");
      img3.classList.remove("sm:hidden");
      changeBtn[0].classList.remove("btnbg");
      changeBtn[1].classList.remove("btnbg");
      btn.classList.add("btnbg");
    }
  });
});

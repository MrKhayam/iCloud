const input1 = document.querySelector(".toChk");
const input2 = document.querySelector(".input2");
const validator = document.querySelector(".validator");
const toShow = document.querySelector(".toshow");
const tohide = document.querySelector(".tohide");

setInterval(() => {
  if (input1.value == "") {
    input2.style.opacity = 0;

  }
}, 100);

validator.addEventListener("click", (e) => {
  if (input1.value) {
    tohide.style.display = "none";
    toShow.style.display = "block";
  }
  setTimeout(() => {
    if (input1.value) {
      input2.style.opacity = 1;
    }
    tohide.style.display = "block";
    toShow.style.display = "none";
  }, 1000);
});

const followElems = [...document.getElementsByClassName("following")];

console.log(followElems);

document.onscroll = () => {
  if (window.scrollY > 90) {
    followElems.forEach((elem) => {
      elem.style.backgroundColor = "var(--nav-color)";
      elem.style.transition = "all 1s";
    });
  } else {
    followElems.forEach((elem) => {
      elem.style.backgroundColor = "rgba(0,0,0,0)";
      elem.style.transition = "all 0.3s";
    });
  }
};
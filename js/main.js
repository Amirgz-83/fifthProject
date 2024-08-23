// start search display settings
document.querySelector("li[name=search]").addEventListener("click", () => {
  document.querySelector("div#search").className = "d-flex";
});
document.querySelector("div[name=close]").addEventListener("click", () => {
  document.querySelector("div#search").className = "";
  document.querySelectorAll("div#product>div").forEach((elem) => {
    elem.style.display = "flex ";
  });
});
// end search display settings

// start slider-config
let count = 4;
let test = document.querySelectorAll("div#slider>img");
let data = Array.from(test);
document.querySelector("div[name=forward]").addEventListener("click", () => {
  data.pop();
  data.forEach((elem) => {
    document.querySelector("div#slider").appendChild(elem);
  });
  count -= 1;
  if (count === -1) {
    test.forEach((elem) => {
      count = 4;
      data = Array.from(test);
      document.querySelector("div#slider").appendChild(elem);
    });
  }
});
// end slider-config

// start search-config

// ATTENTION : search the title that you want (title-1 , title-2 ,...) and others will disappear
document.querySelector("input[type=search]").addEventListener("keyup", () => {
  document.querySelectorAll("div#product>div>h1").forEach((elem) => {
    if (
      elem.textContent === document.querySelector("input[type=search]").value
    ) {
      elem.parentNode.style.display = "flex";
    } else {
      elem.parentNode.style.display = "none";
    }
  });
});
// end serach-config

// start FAQ-config
document.querySelector("a[name=FAQ]").addEventListener("click", () => {
  document.getElementById("FAQ").style.display = "flex";
  document.getElementById("FAQ").style.top = "100px";
});
document
  .querySelector("button[name=close-FAQ]")
  .addEventListener("click", () => {
    document.getElementById("FAQ").style.display = "none";
    document.getElementById("FAQ").style.top = "-100%";
  });

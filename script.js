let ppbtn1 = document.querySelector(".play1");
let audio1 = document.querySelector(".aud1");

ppbtn1.addEventListener("click", function () {
  if (audio1.paused) {
    audio1.play();
    ppbtn1.textContent = "⏸";
    audio2.pause();
    ppbtn2.textContent = "▶";
    audio2.currentTime = 0;
  } else {
    audio1.pause();
    ppbtn1.textContent = "▶";
  }

  audio1.addEventListener("ended", function () {
    audio1.currenttime = 0;
    ppbtn1.textContent = "▶";
  });
});

let ppbtn2 = document.querySelector(".play2");
let audio2 = document.querySelector(".aud2");

ppbtn2.addEventListener("click", function () {
  if (audio2.paused) {
    audio2.play();
    ppbtn2.textContent = "⏸";
    audio1.pause();
    ppbtn1.textContent = "▶";
    audio1.currentTime = 0;
  } else {
    audio2.pause();
    ppbtn2.textContent = "▶";
  }

  audio2.addEventListener("ended", function () {
    audio2.currentTime = 0;
    ppbtn2.textContent = "▶";
  });
});

// Knappen som visar mitt extra fun fact
// 1. Jag klickar på knappen
// 2. Syns inget: visa mitt fun fact, knappen blir Hide
// 3. Syns det redan: ta bort texten, knappen blir Show more
const factButton = document.querySelector("#fact-button");
const extraFact = document.querySelector("#extra-fact");

factButton.addEventListener("click", function () {
  if (extraFact.textContent === "") {
    extraFact.textContent = "I'm really afraid of heights.";
    factButton.textContent = "Hide";
  } else {
    extraFact.textContent = "";
    factButton.textContent = "Show more";
  }
});

// Knappen för ljust läge
// 1. Jag klickar på knappen
// 2. Sidan får klassen light
// 3. Om klassen finns: knappen säger Dark mode
// 4. Om den inte finns: knappen säger Light mode
const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeButton.textContent = "Dark mode";
  } else {
    themeButton.textContent = "Light mode";
  }
});

// Bilden blir större när man klickar på den
const avanImage = document.querySelector("#avan-image");
const zoomButton = document.querySelector("#zoom-button");

zoomButton.addEventListener("click", function () {
  avanImage.classList.toggle("zoomed");

  if (avanImage.classList.contains("zoomed")) {
    zoomButton.textContent = "Zoom out";
  } else {
    zoomButton.textContent = "Zoom in";
  }
});
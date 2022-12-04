let pianoKeys = document.querySelectorAll(".piano-keys .key");
let volume = document.querySelector(".volume-slider input");
let keyCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [];
let audio = new Audio("./../tunes/a.wav"); // by default, audio src is "a" tune
let playtune = (key) => {
  audio.src = `./../tunes/${key}.wav`;
  audio.play(); // Playing audio
  console.log(allKeys);
  let clickedKey = document.querySelector(`[data-key=${key}]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    // Removing active class
    clickedKey.classList.remove("active");
  }, 150);
};
pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  // calling playtune function with passing data-key value as an argument
  key.addEventListener("click", () => playtune(key.dataset.key));
});
let handleVolume = (e) => {
  audio.volume = e.target.value / 100;
};
let pressedKey = (e) => {
  console.log(e);
  if (allKeys.includes(e.key)) {
    playtune(e.key);
  }
};
let showHide = (e) => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
keyCheckbox.addEventListener("click", showHide);
volume.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

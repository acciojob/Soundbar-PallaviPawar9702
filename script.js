const buttons = document.getElementById("buttons");

const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

sounds.forEach(sound => {
  const button = document.createElement("button");

  button.className = "btn";
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSound();

    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttons.appendChild(button);
});

const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.innerText = "Stop";

let currentAudio = null;

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

sounds.forEach(sound => {
  // handled by button click
});

document.querySelectorAll(".btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    currentAudio = new Audio(`sounds/${sounds[index]}.mp3`);
    currentAudio.play();
  });
});

stopButton.addEventListener("click", stopSound);

buttons.appendChild(stopButton);
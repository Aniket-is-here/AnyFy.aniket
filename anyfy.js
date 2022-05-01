console.log("welcome to any-fy");

//varibles
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let mygif = document.getElementById("gif");
let SongItems = Array.from(document.getElementsByClassName("SongItem"));
let Masterplay = document.getElementById("Masterplay");
let songs = [
  {
    songname: "Rover",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songname: "SomeBody That I ",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songname: "My Ordinary Life",
    filepath: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songname: "Humrah",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songname: "Dynamite",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songname: "Binding Lights",
    filepath: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songname: "Nisemononautage",
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songname: "Out of time",
    filepath: "songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songname: "怪物",
    filepath: "songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songname: "Ghost",
    filepath: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];
SongItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

// play/pause click
Masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    Masterplay.classList.remove("fa-play");
    Masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    Masterplay.classList.remove("fa-pause-circ");
    Masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("SongItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("SongItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      Masterplay.classList.remove("fa-play");
      Masterplay.classList.add("fa-pause");
    });
  }
);
document.getElementById("Next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  Masterplay.classList.remove("fa-play");
  Masterplay.classList.add("fa-pause");
});

document.getElementById("Previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  Masterplay.classList.remove("fa-play");
  Masterplay.classList.add("fa-pause");
});

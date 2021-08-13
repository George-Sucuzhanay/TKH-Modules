"use strict";

var song = document.querySelector(".song");
var play = document.querySelector(".play");
var replay = document.querySelector(".replay");
var outline = document.querySelector(".moving-outline circle");
var video = document.querySelector(".vid-container video"); //Sounds

var sounds = document.querySelectorAll(".sound-picker button"); //Time Display

var timeDisplay = document.querySelector(".time-display");
var outlineLength = outline.getTotalLength(); //Duration

var timeSelect = document.querySelectorAll(".time-select button");
var fakeDuration = 600;
outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = "".concat(Math.floor(fakeDuration / 60), ":").concat(Math.floor(fakeDuration % 60));
sounds.forEach(function (sound) {
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});
play.addEventListener("click", function () {
  checkPlaying(song);
});
replay.addEventListener("click", function () {
  restartSong(song);
});

var restartSong = function restartSong(song) {
  var currentTime = song.currentTime;
  song.currentTime = 0;
  console.log("ciao");
};

timeSelect.forEach(function (option) {
  option.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = "".concat(Math.floor(fakeDuration / 60), ":").concat(Math.floor(fakeDuration % 60));
  });
});

var checkPlaying = function checkPlaying(song) {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function () {
  var currentTime = song.currentTime;
  var elapsed = fakeDuration - currentTime;
  var seconds = Math.floor(elapsed % 60);
  var minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = "".concat(minutes, ":").concat(seconds);
  var progress = outlineLength - currentTime / fakeDuration * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
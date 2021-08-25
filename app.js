const catImage = document.getElementById('cat');
const catAudio = document.getElementById('cat-audio');

catImage.addEventListener('click', () => {
  catAudio.play();
});

const dogImage = document.getElementById('Dog');
const dogAudio = document.getElementById('dog-audio');

dogImage.addEventListener('click', () => {
  dogAudio.play();
});

const horseImage = document.getElementById('horse');
const horseAudio = document.getElementById('horse-audio');

horseImage.addEventListener('click', () => {
  horseAudio.play();
});


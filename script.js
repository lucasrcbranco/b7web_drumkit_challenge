document.body.addEventListener('keydown', (e) => {
  playSound(e.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', (e) => {
  let song = document.querySelector('#input').value;
  if (song) {
    const arrSong = Array.from(song);
    playComposition(arrSong);
  }
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300);
  }
}

const playComposition = (arrSong) => {
  let timer = 0;
  for (let songItem of arrSong) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, timer);
    timer += 250;
  }
}
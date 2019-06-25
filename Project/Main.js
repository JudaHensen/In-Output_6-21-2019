const canvas = document.getElementById('map');
const context = canvas.getContext('2d');

var bpm = 110, quantize = 8, outputVolume = .8, isPlaying, beatTime;

document.getElementById('playback').addEventListener('click', ()=>{
  if(!isPlaying || isPlaying == null) Play();
  else Stop();
});

function Play() {
  isPlaying = true;
  document.getElementById('playbackText').innerHTML = 'Stop';

  for(let i = 0; i < instruments.length; i++) {
    instruments[i].Play();
  }
}

function Stop() {
  isPlaying = false;
  document.getElementById('playbackText').innerHTML = 'Start';

  for(let i = 0; i < instruments.length; i++) {
    instruments[i].Stop();
  }
}

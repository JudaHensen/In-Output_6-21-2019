const canvas = document.getElementById('map');
const context = canvas.getContext('2d');

var bpm = 110, quantize = 8, outputVolume = .8, isPlaying;

document.getElementById('playback').addEventListener('click', ()=>{
  if(!isPlaying || isPlaying == null) Play();
  else Stop();
});

function Play() {
  isPlaying = true;
  document.getElementById('playbackText').innerHTML = 'Stop';

}

function Stop() {
  isPlaying = false;
  document.getElementById('playbackText').innerHTML = 'Start';

}

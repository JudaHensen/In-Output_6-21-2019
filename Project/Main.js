const canvas = document.getElementById('map');
const context = canvas.getContext('2d');
const fileUploader = new FileUploader();

var audio = new Audio();

const imageSelect = document.getElementById('imageSelect');
imageSelect.addEventListener('change', fileUploader.UploadImage, false);

var bpm = 110, quantize = 4, outputVolume = .8, isPlaying,
    beatTime = (60 / (bpm / 4)) / quantize;

document.getElementById('playback').addEventListener('click', ()=>{
  if(!isPlaying || isPlaying == null) Play();
  else Stop();
});


// Play image file
function Play() {
  isPlaying = true;
  document.getElementById('playbackText').innerHTML = 'Stop';

  console.log('bpm: ' + bpm + ' | quantize: ' + quantize + ' | beatTime: ' + beatTime)// <<<<<<<<<<<<<<<<<<<<<<<

  for(let i = 0; i < instruments.length; i++) {
    instruments[i].Play();
  }
}

// Stop playback
function Stop() {
  isPlaying = false;
  document.getElementById('playbackText').innerHTML = 'Start';

  for(let i = 0; i < instruments.length; i++) {
    instruments[i].Stop();
  }
}

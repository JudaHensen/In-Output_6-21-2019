const canvas = document.getElementById('map');
const context = canvas.getContext('2d');
const imgToPx = new ImageToPixels(context);
const fileUploader = new FileUploader();
var mainContext = new AudioContext();

var audio = new Audio();

const imageSelect = document.getElementById('imageSelect');
imageSelect.addEventListener('change', fileUploader.UploadImage, false);

var bpm = 110, quantize = 4, outputVolume = .8, isPlaying,
    beatTime = (60 / (bpm / 4)) / quantize, maxColumns = 8;

document.getElementById('playback').addEventListener('click', ()=>{
  if(!isPlaying || isPlaying == null) Play();
  else Stop();
});


// Play image file
function Play() {
  if(imgToPx.IsObtained()) {
    isPlaying = true;
    document.getElementById('playbackText').innerHTML = 'Stop';

    for(let i = 0; i < instruments.length; i++) {
      instruments[i].Play( imgToPx.GetData(instrumentNames[i]) );
    }
  }
  else window.alert('You need to upload a correct image before you can play music.');
}

// Stop playback
function Stop() {
  isPlaying = false;
  document.getElementById('playbackText').innerHTML = 'Start';

  for(let i = 0; i < instruments.length; i++) {
    instruments[i].Stop();
  }
}

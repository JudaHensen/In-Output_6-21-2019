// Change bpm
document.getElementById('bpm_selector').addEventListener('change', ()=>{
  let elem = document.getElementById('bpm_selector');
  if(elem.value < 30) elem.value = 30;
  else if(elem.value > 200) elem.value = 200;

  bpm = parseInt(elem.value);
  beatTime = (60/ (bpm / 4)) / quantize;
});

// Change quantize
document.getElementById('quantize_selector').addEventListener('change', ()=>{
  quantize = parseInt(document.getElementById('quantize_selector').value);

  beatTime = (60/ (bpm / 4)) / quantize;
});

// Change outputVolume
document.getElementById('volume_selector').addEventListener('change', ()=>{
  let elem = document.getElementById('volume_selector');
  if(elem.value < 0) elem.value = 0;
  else if(elem.value > 100) elem.value = 100;

  outputVolume = parseInt(elem.value)/100;
});

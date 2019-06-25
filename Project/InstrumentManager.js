let instrumentNames = ["kick", "snare", "hihat", "noise", "sine", "triangle", "square", "sawtooth"];
var instruments = [];

for(let i = 0; i < instrumentNames.length; i++) {
  // Create html elements
  let value = instrumentNames[i];
  let div = document.createElement('div');
  let p = document.createElement('p');

  p.innerHTML = value;
  p.className = 'instrument_selectorText';

  div.className = 'instrument_selector';
  div.addEventListener('click', ()=>{ChangeInstrumentEditor(value);});

  div.appendChild(p);
  document.getElementById('instrument_select').appendChild(div);

  // Create Audio Elements
  switch(value) {
    case "kick": case "snare": case "hihat":
      CreateSample(value);
      break;
    case "noise": case "sine": case "triangle": case "square": case "sawtooth":
      CreateOscillator(value);
      break;
  }
}

function CreateSample(type) {
  let obj = new SampleManager(type);
  instruments.push(obj);
}

function CreateOscillator(type) {
  let obj = new OscillatorManager(type);
  instruments.push(obj);
}

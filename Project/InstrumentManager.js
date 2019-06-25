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
}

function ChangeInstrumentEditor(instrument) {

}

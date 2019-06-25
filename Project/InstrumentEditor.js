let type;
let attributes = [];

function ChangeInstrumentEditor(instrument) {
  if(instrument == type) return;
  type = instrument

  let parent = document.getElementById('instrument_editor');

  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // Get instrument attributes
  for(let i = 0; i < instruments.length; i++) {
    if(instruments[i].GetType() == type) {
      attributes = instruments[i].GetAttributes();
      console.log(i);
      break;
    }
  }
  // Create html elements
  for(let i = 0; i < attributes.length; i++) {
    let id = i;
    let key = attributes[id][0];
    let val = attributes[id][1];

    let p = document.createElement('p');
    let select = document.createElement('input');// <<<<<<<<<<<<<<<<<
    let div = document.createElement('div');

    p.innerHTML = key;

    select.type = 'number';
    select.min = 0;
    select.max = 1;
    select.value = val;

    select.addEventListener('change', ()=>{
      if(select.value < 0) select.value = 0;
      else if(select.value > 1) select.value = 1;
      // Set attribute for the correct instrument
      for(let i = 0; i < instruments.length; i++) {
        if(instruments[i].GetType() == type) {
          instruments[i].SetAttribute(key, select.value);
          break;
        }
      }
    });

    div.appendChild(p);
    div.appendChild(select);

    parent.appendChild(div);
  }

}

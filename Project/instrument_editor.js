let type;
let attributes = [];

function ChangeInstrumentEditor(instrument) {
  if(instrument == type) return;
  type = instrument;

  let parent = document.getElementById('instrument_editor');

  // Remove current html elements
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // Get instrument attributes
  for(let i = 0; i < instruments.length; i++) {
    if(instruments[i].GetType() == type) {
      attributes = instruments[i].GetAttributes();
      break;
    }
  }

  let title = document.createElement('p');
  title.innerHTML = '<b><i>' + instrument + '</i></b>';
  parent.appendChild(title);

  // Create html elements
  for(let i = 0; i < attributes.length; i++) {
    let id = i;
    let key = attributes[id][0];
    let val = attributes[id][1];

    let p = document.createElement('p');
    let select = document.createElement('input');// <<<<<<<<<<<<<<<<<
    let div = document.createElement('div');

    p.innerHTML = key;

    // If the key is a sample, reference the FileUploader
    if(key == 'sample') {
      select.type = 'file';
      select.accept = '.wav, .mp3, .ogg';

      select.addEventListener('change', fileUploader.UploadAudio, false);
    }
    else {
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
    }

    // Assign elemnts to html
    div.appendChild(p);
    div.appendChild(select);

    parent.appendChild(div);
  }
}

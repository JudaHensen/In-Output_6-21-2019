class OscillatorManager {

  constructor(type) {
    this.type = type;
    this.main = mainContext;
    this.attributes = { volume: 1,
                        attack: 0.07,
                        level: 1,
                        decay: 0.15,
                        sustain: 1,
                        release: .075 };

    this.toneManager = new ToneManager();

    this.oscillators = [];
  }

  // Play oscillators according to map data
  Play(mapData) {
    // Remove all previous oscillators in case they still exist
    while(this.oscillators.length > 0) this.oscillators.pop();

    let att = this.attributes;

    for(let i = 0; i < mapData.length; i++) {

      let tones = this.toneManager.GetTone(mapData[i].note);
      let delay = i * beatTime;

      if(mapData[i].volume != 0) {
        // Play & create oscillator for each note
        for(let c = 0; c < tones.length; c++) {
          let osc = new Oscillator(att.volume, tones[c]);
          osc.Start(mapData[i].volume, delay, att.attack, att.level, att.decay, att.sustain, att.release);
          this.oscillators.push(osc);
        }
      }
    }
  }

  // Stops all oscillators
  Stop() {
    for(let i = this.oscillators.length - 1; i > -1; i--) {
      this.oscillators[i].Stop();
      this.oscillators.pop();
    }
  }

  GetType() {
    return this.type;
  }

  GetAttributes() {
    let att = this.attributes;
    return [ ["volume", att.volume],
             ["attack", att.attack],
             ["level", att.level],
             ["decay", att.decay],
             ["sustain", att.sustain],
             ["release", att.release] ];
  }

  SetAttribute(attribute, value) {
    switch(attribute) {
      case "volume": this.attributes.volume = value; break;
      case "attack": this.attributes.attack = value; break;
      case "level": this.attributes.level = value; break;
      case "decay": this.attributes.decay = value; break;
      case "sustain": this.attributes.sustain = value; break;
      case "release": this.attributes.release = value; break;
    }
  }
}

class OscillatorManager {

  constructor(type) {
    this.type = type;
    this.attributes = { volume: 1,
                        attack: 0.1,
                        level: 1,
                        decay: 0,
                        sustain: 1,
                        release: .25 };

    this.toneManager = new ToneManager();

    this.oscillators = [];
  }

  // Play according to map data
  Play(mapData) {

  }

  // Stops all oscillators
  Stop() {

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

class SampleManager {

  constructor(type) {
    this.type = type;
    this.attributes = { volume: 1, sample: new Audio("samples/" + type + ".wav") }

    this.samples = [];
  }

  // Play according to map data
  Play(mapData) {

  }

  // Stops all drums
  Stop() {

  }

  GetType() {
    return this.type;
  }

  GetAttributes() {
    let att = this.attributes;
    return [ ["volume", att.volume],
             ["sample", att.sample] ];
  }

  SetAttribute(attribute, value) {
    switch(attribute) {
      case "volume": this.attributes.volume = value; break;
      case "sample": this.attributes.sample = value; break;
    }
  }

}

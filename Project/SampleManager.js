class SampleManager {

  constructor(type) {
    this.type = type;
    this.attributes = { volume: 1 }

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
    return [ ["volume", att.volume] ];
  }

  SetAttribute(attribute, value) {
    switch(attribute) {
      case "volume": this.attributes.volume = value; break;
    }
  }

}

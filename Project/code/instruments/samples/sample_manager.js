class SampleManager {

  constructor(type) {
    this.type = type;
    this.attributes = { volume: .01, sample: new Audio("samples/" + this.type + ".ogg") }

    this.sample = new Audio();
    this.sample.src = 'samples/' + this.type + '.ogg';
    this.sample.load();

    this.samples = [];
  }

  // Play according to map data
  Play(mapData) {
    while(this.samples.length > 0) this.samples.pop();

    for(let i = 0; i < mapData.length; i++) {
      if(mapData[i].volume > 0) {
        let delay = i * beatTime;

        let obj = {};
        obj.sample = new Audio();
        obj.sample.src = this.sample.src;
        obj.sample.load();
        // context
        obj.context = new AudioContext();
        // delay
        obj.delay = obj.context.createDelay(120);
        obj.delay.delayTime.value = delay;
        obj.delay.connect(obj.context.destination);
        // gain
        obj.gain = obj.context.createGain();
        obj.gain.gain.value = outputVolume * this.attributes.volume * mapData[i].volume;
        obj.gain.connect(obj.delay);
        // source
        obj.source = obj.context.createMediaElementSource(obj.sample);
        obj.source.connect(obj.gain);

        this.samples.push(obj);
        obj.sample.play();

      }
    }
  }

  // Stops all drums
  Stop() {
    for(let i = 0; i < this.samples.length; i++) {
      this.samples[i].source.disconnect();
      this.samples[i].delay.disconnect();
      this.samples[i].gain.disconnect();
    }
    while(this.samples.length > 0) this.samples.pop();
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

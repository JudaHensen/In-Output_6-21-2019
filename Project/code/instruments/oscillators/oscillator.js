class Oscillator {

  constructor(volume, frequency) {
    // Creates a unique id for each oscillator
    this.id = Math.random() * Math.random();

    this.main = mainContext;
    this.context = new AudioContext();

    this.volume = volume;
    this.frequency = frequency;


    this.gain = this.context.createGain();
    this.oscillator = this.context.createOscillator();
    this.oscillator.frequency.value = this.frequency;

    this.gain.gain.value = 0;
    this.oscillator.connect(this.gain);
    this.gain.connect(this.context.destination);

    this.started = false;
  }

  // Play oscillator
  Start(volume, delay, attack, level, decay, sustain, release) {
    let time = this.context.currentTime;
    if(!this.started) {
      this.started = true;
      this.oscillator.start();

      level *= outputVolume * this.volume * volume;
      sustain *= outputVolume * this.volume * volume;

      this.gain.gain.setValueAtTime(0, time + delay);
      this.gain.gain.linearRampToValueAtTime(level, time + delay + attack);
      this.gain.gain.linearRampToValueAtTime(sustain, time + delay + attack + decay);

      this.gain.gain.setValueAtTime(sustain, time + delay + attack + decay);
      this.gain.gain.linearRampToValueAtTime(0, time + delay + attack + decay + release);

      this.oscillator.stop(time + delay + attack + decay + release);
    }
  }

  Stop() {
    this.oscillator.disconnect();
    this.gain.disconnect();
  }

  // Stop the osc completely, no decay & reverb etc.

  GetId() { return this.id; }

}

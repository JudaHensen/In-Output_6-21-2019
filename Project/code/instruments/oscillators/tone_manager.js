class ToneManager {

  constructor() {
    // Single notes C1 - C10
    this.tones = [];
    // Chord formulas
    this.formulas = {};
    this.formulas.base = 24;
    this.formulas.major = [0, 4, 7];
    this.formulas.minor = [0, 3, 7];
    this.formulas.majorSeven = [0, 3, 7, 11];
    this.formulas.seven = [0, 3, 7, 10];
    this.formulas.nine = [0, 3, 7, 10, 14];

    let base = 440, baseIndex = 45;
    // calculate all tone valeus in hertz
    for(let i = 0; i <= 120; i++) {
      let index = i - baseIndex;
      let val = base * Math.pow(2, index/12);
      this.tones.push(val);
    }
  }

  GetTone(index) {
    let notes = [];

    // play single notes
    if(index <= 120) notes.push(this.tones[index]);

    /// Chords
    // C3 - B4 maj
    else if(index >= 121 && index <= 144) {
      for(let i = 0; i < this.formulas.major.length; i++) {
        notes.push(this.tones[ (index % 121) + this.formulas.base + this.formulas.major[i] ]);
      }
    }
    // C3 - B4 min
    else if(index >= 145 && index <= 168) {
      for(let i = 0; i < this.formulas.minor.length; i++) {
        notes.push(this.tones[ (index % 145) + this.formulas.base + this.formulas.minor[i] ]);
      }
    }
    // C3 - B4 maj7
    else if(index >= 169 && index <= 192) {
      for(let i = 0; i < this.formulas.majorSeven.length; i++) {
        notes.push(this.tones[ (index % 169) + this.formulas.base + this.formulas.majorSeven[i] ]);
      }
    }
    // C3 - B4 7
    else if(index >= 193 && index <= 216) {
      for(let i = 0; i < this.formulas.seven.length; i++) {
        notes.push(this.tones[ (index % 193) + this.formulas.base + this.formulas.seven[i] ]);
      }
    }
    // C3 - B4 9
    else if(index >= 217 && index <= 240) {
      for(let i = 0; i < this.formulas.nine.length; i++) {
        notes.push(this.tones[ (index % 217) + this.formulas.base + this.formulas.nine[i] ]);
      }
    }

    return notes;

  }

}

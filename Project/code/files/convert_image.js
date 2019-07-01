class ImageToPixels {

  constructor(context) {
    this.ctx = context;
    this.data = [ { type: 'kick',     data: [] },
                  { type: 'snare',    data: [] },
                  { type: 'hihat',    data: [] },
                  { type: 'noise',    data: [] },
                  { type: 'sine',     data: [] },
                  { type: 'triangle', data: [] },
                  { type: 'square',   data: [] },
                  { type: 'sawtooth', data: [] } ];
    this.obtained = false;
  }

  // Convert image data
  ConvertImage() {
    // Obtain data
    let imgData = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    if(imgData.height > maxColumns) console.warn('Image height cannot be greater than ' + maxColumns) + '!';
    else {
      for(let i = 0; i < imgData.height; i++) {
        // data obtained from image
        let obtainedData = imgData.data.slice( (imgData.data.length / maxColumns) * i, (imgData.data.length / maxColumns) * (i+1));
        // Convert image data to note & volume
        for(let c = 0; c < obtainedData.length; c += 4) {
          this.data[i].data.push( {note: obtainedData[c + 2], volume: obtainedData[c + 3]} );
        }
      }
      this.obtained = true;
    }
  }

  // Return data
  GetData(type) {
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i].type == type) return this.data[i].data;
    }
  }

  IsObtained() { return this.obtained; }

}

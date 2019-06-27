class FileUploader {

  // Get image
  UploadImage() {
    // Check if file can be found
    if ( this.files && this.files[0] ) {
      // create a file reader to read the file
      let reader = new FileReader();
      reader.readAsDataURL( this.files[0] );

      reader.onload = function(e) {
        let img = new Image();
        img.src = e.target.result;

        // draw image on canvas when loaded
        img.addEventListener("load", function() {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          context.drawImage(img, 0, 0);
        });
      };
    }
  }

  UploadAudio() {
    // Check if file can be found
    if ( this.files && this.files[0] ) {
      // create a file reader to read the file
      let reader = new FileReader();
      reader.readAsDataURL( this.files[0] );

      reader.onload = function(e) {

        audio = new Audio();
        audio.src = e.target.result;

        // Assign the audio file to the correct instrument
        for(let i = 0; i < instruments.length; i++) {
          if(instruments[i].GetType() == type) {
            instruments[i].SetAttribute('sample', audio);
            break;
          }
        }

      };
    }
  }

}

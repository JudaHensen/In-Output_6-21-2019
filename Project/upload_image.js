class UploadImage {

  constructor(context, fileInput) {
    // this.ctx = context;
    this.input = fileInput;

    this.input.addEventListener('change', this.Upload, false);
  }

  // Get image
  Upload() {
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

}

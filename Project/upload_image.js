class UploadImage {

  constructor(ctx) {
    this.ctx = ctx
  }

  SetImage(parent) {
    this.image = parent.files[0];

    this.ctx.drawImage(this.image, 100, 100);
    console.log('kek');
  }

}

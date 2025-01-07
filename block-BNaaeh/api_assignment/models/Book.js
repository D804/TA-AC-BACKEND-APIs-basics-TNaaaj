let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Book', bookSchema);

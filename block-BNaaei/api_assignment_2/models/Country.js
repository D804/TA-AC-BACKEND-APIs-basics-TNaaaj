let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let countrySchema = new Schema({
  name: { type: String, required: true },
  states: {},
  continent: { type: String, required: true },
  population: { type: Number, required: true },
  ethinicity: { type: String, required: true },
  neighbouring_countries: {},
  are: { type: String, required: true },
});

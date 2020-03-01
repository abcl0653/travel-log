const mongoose = require('mongoose');

const { Schema } = mongoose;

// * Title
// * Description
// * Comments
// * Rating - scale of 1 - 10
// * Image - Text - URL
// * Start Date - DateTime
// * End Date - DateTime
// * Latitude - Number
// * Longitude - Number
// * Created At - DateTime
// * Updated At - DateTime

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  author: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;

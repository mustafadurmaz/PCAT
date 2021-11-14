const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

// Photo.find({}, (err, data) => {
//   console.log(data);
// });

const id = '6190f595904a630b6e40aa8b';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo title1 updated',
//     description: 'Photo description 1 updated',
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed');
});

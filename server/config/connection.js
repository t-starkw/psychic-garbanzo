const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://tstarkw:JXbbQ8S8mSzRjle3@tessacluster.hocfryr.mongodb.net/psychic-garbanzo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoFood:9989728166@cluster0.sscqwk3.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        // other options if needed
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };
  
module.exports = mongoDB;
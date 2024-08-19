const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGO_URI)

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

async function connectDB() {
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB Connected...!");
  } catch (err) {
      console.log(err);
  }
}

module.exports = {connectDB};

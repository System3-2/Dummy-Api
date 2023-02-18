const Data = require("./models/App");
const data = require("./data.json");
const connectDB = require("./db/connect");
require('dotenv').config();

const start = async () => {

  try {
    await connectDB(process.env.MONGO_URI);
    await Data.deleteMany();
    await Data.create(data);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
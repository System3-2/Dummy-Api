const express = require("express");
const app = express();
require("express-async-errors");
require("dotenv").config();
const router = require("./routes/app");
const connectDB = require("./db/connect");

app.use(express.static('./public'));

app.use(express.json());
app.use("/api/v1/app", router);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

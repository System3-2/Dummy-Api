const Data = require("../models/App");

const getAllData = async (req, res) => {
  try {
    const data = await Data.find({}).limit(10);
    if (!data) {
      res.status(500).json({ msg: "An error occured", success: false });
    } else {
      res.status(200).json({ data, success: true });
    }
  } catch (error) {
    res.status(500).json({ msg: error, success: false });
  }
};

const getSingleTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const data = Data.findOne({ id }, (error, data) => {
      if (!data) {
        res.status(500).json({ msg: "An error occured", success: false });
      } else {
        res.status(200).json({ data, success: true });
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message, success: false });
    console.log(error);
  }
};
module.exports = {
  getAllData,
  getSingleTasks,
};

const Data = require("../models/App");

const getAllData = async (req, res) => {
  try {
    const data = await Data.find({});
    if (!data) {
      res.status(500).json({ msg: "An error occured", success: false });
    } else {
      res.status(200).json({ data, success: true });
    }
  } catch (error) {
    res.status(500).json({ msg: error, success: false });
  }
};

module.exports = {
  getAllData,
};

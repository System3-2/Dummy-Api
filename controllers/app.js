const Data = require("../models/App");

const getAllData = async (req, res) => {
  const { firstName, lastName, gender, height, weight, eyeColor } = req.query;
  const queryOptions = {};

  if (gender) {
    queryOptions.gender = gender;
  }
  if (firstName) {
    queryOptions.firstName = { $regex: firstName, $options: "i" };
  }
  if (lastName) {
    queryOptions.lastName = { $regex: lastName, $options: "i" };
  }

  // pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  try {
    const data = await Data.find(queryOptions).limit(limit);
    if (!data) {
      res.status(500).json({ msg: "An error occured", success: false });
    } else {
      res.status(200).json({ data, success: true, total: data.length });
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

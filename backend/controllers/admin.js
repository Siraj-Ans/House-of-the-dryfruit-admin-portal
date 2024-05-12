const Admin = require("../models/admin");

exports.createAdmin = (req, res) => {
  async function saveAdminToDB() {
    try {
      const admin = new Admin({
        userName: req.body.admin.adminUserName,
        password: req.body.admin.adminPassword,
        dateAndTime: req.body.dateAndTime,
      });

      const result = await admin.save();

      console.log("result: ", result);

      const user = await Admin.findOne({
        userName: req.body.admin.adminUserName,
        password: req.body.admin.adminPassword,
      });

      res.status(200).json({
        message: "Successfully created the admin",
        user: user,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server failed to create admin",
      });
    }
  }

  saveAdminToDB();
};

exports.fetchAdmins = (req, res) => {
  async function getAdminsFromDB() {
    try {
      const admins = await Admin.find();

      res.status(200).json({
        message: "Successfully fetched the admins",
        admins: admins,
      });
    } catch (err) {
      res.status(500).json({
        message: "Server failed to fetch admins",
      });
    }
  }

  getAdminsFromDB();
};

exports.deleteAdmin = (req, res) => {
  async function deleteAdminFromDB() {
    try {
      if (!req.query.adminID)
        return res.status(400).json({
          message: "adminID missing",
        });

      const result = await Admin.deleteOne({ _id: req.query.adminID });

      if (!result.deletedCount)
        res.status(500).json({
          message: "Could not delete the admin",
        });

      return res.status(200).json({
        message: "Successfully deleted the admin",
      });
    } catch (err) {
      res.status(500).json({
        message: "Server failed to delete admin",
      });
    }
  }

  deleteAdminFromDB();
};

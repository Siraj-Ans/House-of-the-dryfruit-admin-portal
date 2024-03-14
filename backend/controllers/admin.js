const Admin = require("../models/admin");

exports.createAdmin = (req, res) => {
  async function saveAdminToDB() {
    try {
      const admin = new Admin({
        username: req.body.adminUserName,
        password: req.body.adminPassword,
      });

      let result = await admin.save();

      console.log("saved admin: ", result);
    } catch (err) {
      console.log(err);
    }
  }

  saveAdminToDB();
};

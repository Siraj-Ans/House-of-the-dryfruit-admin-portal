const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

exports.login = (req, res) => {
  async function findAdminOnDB() {
    try {
      let user = await Admin.findOne({
        username: req.body.userName,
        password: req.body.password,
      });

      if (!user)
        return res.status(404).json({
          message: "User not found!",
        });

      const jwtToken = jwt.sign({ userName: user.userName }, "7E4Yu@bx", {
        expiresIn: "1h",
      });

      res.status(200).json({
        message: "User found!",
        user: user,
        token: jwtToken,
        expiresIn: 3600,
      });
    } catch (err) {
      console.log(err);
    }
  }

  findAdminOnDB();
};

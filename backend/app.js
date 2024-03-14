const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://boooom86608:lpOMvJLYh0tIjTti@cluster0.qxmz1zo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "House-of-the-dryfruits",
      }
    );

    console.log("Connected to mongoDB successfully!");
  } catch (err) {
    console.log(err);
  }
}

connectToMongoDB();

const app = express();

app.use("", express.json());
app.use("", cors());

app.use("/api/login", authRoutes);
app.use("/api/admins", adminRoutes);

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log("Server is running on port:3000");
});

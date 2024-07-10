const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mealRoutes = require("./routes/meals");
const userRoutes = require("./routes/users");
const connection = require("./Config/Connection");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/meals", mealRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

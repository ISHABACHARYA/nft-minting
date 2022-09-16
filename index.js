const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./src/routes");

const app = express();

app.get("/", (req, res) => {
  res.send("");
});
app.use("/api", routes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

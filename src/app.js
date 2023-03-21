const express = require("express");
require("./db/conn");
const studentRouter = require("./router/student");
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(5004, () => {
  console.log("listening..");
});

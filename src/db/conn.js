const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModifiy: false,
  })
  .then(() => {
    console.log("connection established!");
  })
  .catch((err) => {
    console.log("error", err);
  });

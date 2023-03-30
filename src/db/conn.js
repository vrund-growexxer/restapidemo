const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://vrundshah:tJNozS0DphpNMewu@social.9i2szzh.mongodb.net/students-api?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModifiy: false,
    }
  )
  .then(() => {
    console.log("connection established!");
  })
  .catch((err) => {
    console.log("error", err);
  });

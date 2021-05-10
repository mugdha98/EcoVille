const express = require("express");
const app = express();
const connectDB = require("./config/db");
var cors = require("cors");

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//define routes
app.use("/feedback", require("./routes/feedback"));
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/seller", require("./routes/seller"));
app.use("/rider", require("./routes/rider"));
app.use("/vendor", require("./routes/vendor"));

//can add heroku deploy changes

//run the server
const port = process.env.PORT || 1210;
app.listen(port, () => console.log(`Server started on port ${port}`));

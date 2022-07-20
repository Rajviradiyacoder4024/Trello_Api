const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// require("./routes/users");

const app = express();
const port = process.env.port || 3008;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users_routes = require("./routes/users");


const admin_routes = require("./routes/admin");


const country_routes = require("./routes/country");


const email_template_routes = require("./routes/email_template");
const plan_routes = require("./routes/plan");
const state_routes = require("./routes/state");
const city_routes = require("./routes/City");
const setting_routes = require("./routes/setting");
const pincode_routes = require("./routes/pincode");

const { db } = require("./config/db.config");

app.use("/user", users_routes);
app.use("/admin", admin_routes);
app.use("/country", country_routes);
app.use("/email-template", email_template_routes);
app.use("/plan", plan_routes);
app.use("/state", state_routes);
app.use("/city", city_routes);
app.use("/setting", setting_routes);
app.use("/pincode", pincode_routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to admin panel" });
});

// app.all("*", (req,res) => {
//     res.json({message: "Route doesn't exist"});
// });

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

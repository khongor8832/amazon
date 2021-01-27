const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/DB");
const rfs = require("rotating-file-stream"); // version 2.x
const categoriesRouters = require("./routes/categories");
const Logger = require("./middleware/logger");
dotenv.config({ path: "./config/config.env" });

connectDB();
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});

const app = express();

//body parser
app.use(express.json());
app.use(Logger);
app.use(morgan("combined", { stream: accessLogStream })); // morgan функц байж байдаг. Дотор dev дамжуулж байна.
app.use("/api/v1/categories", categoriesRouters);

const server = app.listen(
  process.env.PORT,
  console.log(
    `Express server ${process.env.PORT} порт нь дээр ажиллаа....`.rainbow
  )
);
process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

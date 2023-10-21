const express = require("express");
const uploadRouter = require("./upload");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const port = 5000;

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

app.use(uploadRouter);
app.use(router);
app.use(errorHandler);

app.listen(port || 5000, () => {
  console.log("running at port", port);
});

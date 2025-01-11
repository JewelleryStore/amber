global.express = require("express");
global.axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;
const productRoutes = require("./routes/productRoutes");

app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

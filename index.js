global.express = require("express");
global.axios = require("axios");
require("dotenv").config();

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3002",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
const port = 3000;
const productRoutes = require("./routes/productRoutes");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

global.express = require("express");
global.axios = require("axios");
require("dotenv").config();

const cors = require("cors");

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
const port = process.env.PORT || 3000;
const productRoutes = require("./routes/productRoutes");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

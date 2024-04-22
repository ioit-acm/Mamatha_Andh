const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require('cors');

const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5500'] }));
app.use("/donationAPI", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
})
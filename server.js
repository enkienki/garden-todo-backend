require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const getCityCoordinates = require("./controllers/geocoding");
const getWeatherForecast = require("./controllers/weatherForecast");
const handleTodo = require("./controllers/todo");
const handleTodoDescription = require("./controllers/todoDescription");
const handlePlant = require("./controllers/plant");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-wluuq.mongodb.net/cultive?retryWrites=true&w=majority`;
mongoose.connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// When successfully connected
db.on("connected", () =>
  console.log("Established Mongoose Default Connection")
);
// When connection throws an error
db.on("error", (err) =>
  console.log("Mongoose Default Connection Error : " + err)
);
// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
router.get("/geocoding/:userinput", (req, res) => getCityCoordinates(req, res));
router.get("/weatherforecast/:lat,:long", (req, res) =>
  getWeatherForecast(req, res)
);
router.get("/todo", (req, res) => handleTodo(req, res));
router.get("/todoDescription/:tag", (req, res) =>
  handleTodoDescription(req, res)
);
router.get("/plant", (req, res) => handlePlant(req, res));

// Append /api for http requests
app.use("/api", router);

// Bootstrap server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

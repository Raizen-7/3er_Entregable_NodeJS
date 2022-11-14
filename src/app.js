const express = require('express');
const db = require('./utils/data.util');
const morgan = require("morgan");

//middleware
const handleError = require('./middleware/error.middleware');

//relatios
const initModels = require('./models/initModels');

//Routes
const userRoutes = require('./Routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const categoriesRoutes = require('./routes/categories.routes');
const authRoutes = require('./routes/auth.routes');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000;

db.authenticate() 
  .then(() => console.log("Authenticated succes"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Db Sync"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
  res.status(200).json({ messge: "ok" });
  next();
});

//routes
app.use("/api/v1", userRoutes);
app.use("/api/v1", courseRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);
app.use("/api/v1", authRoutes);

app.use(handleError);

app.listen(PORT, () => console.log("server running on port" + PORT));
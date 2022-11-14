const express = require('express');
const db = require('./utils/data.util');
const initModels = require('./models/initModels');
const userRoutes = require('./Routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

db.authenticate() 
  .then(() => console.log("Authenticated succes"))
  .catch((error) => console.log(error));

db.sync({ force: false })
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


app.listen(PORT, () => console.log("server running on port" + PORT));
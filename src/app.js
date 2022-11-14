const express = require('express');
const db = require('./utils/data.util');
const initModels = require('./models/initModels');

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

app.listen(PORT, () => console.log("server running on port" + PORT));
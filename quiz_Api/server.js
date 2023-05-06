const express = require('express');
const cors = require('cors');
const config = require('./app/db.config'); // import config file
const db = require("./app/models");
const app = express();
app.use(cors());
app.use(express.json());



const port = process.env.PORT || 8698;
db.sequelize.sync();
// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
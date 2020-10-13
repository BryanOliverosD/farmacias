const express = require('express');
const app = express();
var bodyParser = require('body-parser')

require("dotenv").config({ silent: true });

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});
app.use(bodyParser.json())
// Listen to the App Engine-specified port, or 3000 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
app.use('/', require('./routes'));
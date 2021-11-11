const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(routes);


app.listen(process.env.PORT || 5000, () => console.log("Server init!!!"));
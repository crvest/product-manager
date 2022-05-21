const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/product.routes')(app);


app.listen( port, () => console.log(`the server is listening on port ${port}`));
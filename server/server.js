var express = require('express'),
  bodyParser = require('body-parser'),
  morgan     = require('morgan'),
  methodOverride = require('method-override'),
  cors = require('cors');

var product = require('./routes/product');

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(methodOverride());

// invoke methods in routes/product.js
app.get('/product', product.findProduct);     // http://127.0.0.1:3000/product
app.get('/product/:id', product.findById);  // http://127.0.0.1:3000/product/1
app.get('/products', product.findAll);        // http://127.0.0.1:3000/products


var port = 3000;
app.listen(port);
console.log('Back End Server running at http://127.0.0.1:' + port);

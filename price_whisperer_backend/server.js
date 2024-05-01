const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

const db = 'mongodb+srv://ramnaresh_ulaganathan:Naresh_447@cluster0.tyoy6yh.mongodb.net/?retryWrites=true&w=majority';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const database = mongoose.connection.useDb('test1');

const Product = database.model('Product', productSchema, 'products');


app.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products[0].name);
});

app.listen(3500, () => console.log('Server is running on port 3500'));
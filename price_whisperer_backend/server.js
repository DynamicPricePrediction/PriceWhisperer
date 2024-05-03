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
  price: String,
  image: String,
});

const storeSchema = new mongoose.Schema({
  title: String,
  slogan: String,
  image: String,
  use:  Array
});

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const database = mongoose.connection.useDb('test1');

const Product = database.model('Product', productSchema, 'products');

const Stores = database.model('Stores', storeSchema, 'stores');


app.get('/trending', async (req, res) => {
  const products = await Product.find({ use: "trending" });
  res.send(products);
});

/* api to get all featured stores */
app.get('/storesFeatured', async (req, res) => {
  const featured_stores = await Stores.find({ use: { $in: ["featured"] }});
  res.send(featured_stores);
});

app.listen(4000, () => console.log('Server is running on port 4000'));
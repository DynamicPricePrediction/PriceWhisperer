const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
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

const User = database.model('User', userSchema, 'users');


app.get('/trending', async (req, res) => {
  const products = await Product.find({ use: "trending" });
  res.send(products);
});

/* api to get all featured stores */
app.get('/storesFeatured', async (req, res) => {
  const featured_stores = await Stores.find({ use: { $in: ["featured"] }});
  res.send(featured_stores);
});

app.get('/fetchStoreProducts/:id', async (req, res) => {
  const store = await Stores.find({ _id: req.params.id });
  console.log(store);
  const store_type = store[0]["title"];

  const products = await Product.find({ type: store_type });
  console.log("products: ", products)
  res.send(products);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });
    console.log("check: ", check);
    if (check) {
      res.json(["exist", check.username]);
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  console.log("Request's body: ", req);
  const { email, password, username } = req.body;

  const data = {
    username: username,
    email: email,
    password: password,

  };

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      await User.create(data);
      res.json("notexist");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => console.log('Server is running on port 4000'));
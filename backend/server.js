const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://watyllamacedo:<password>@watylla.g2kbtrd.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  try {
    await user.save();
    res.status(201).send('User registered successfully!');
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).send('Login successful!');
  } else {
    res.status(401).send('Invalid username or password.');
  }
});


app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users.map(user => ({ username: user.username, id: user._id })));
});


app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id, 'username');
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});


app.put('/users/:id', async (req, res) => {
  const { username } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { username }, { new: true });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send('User not found');
  }
});


app.delete('/users/:id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  if (result) {
    res.send({ message: 'User deleted successfully' });
  } else {
    res.status(404).send('User not found');
  }
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));

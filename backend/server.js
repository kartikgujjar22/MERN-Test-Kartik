const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Todo = require("./models/ToDo");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://kartikgujjar1008:CUbHFRBtIm54qQ3F@cluster0.z3czk.mongodb.net/todoDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// GET /api/todos - Fetch all todos
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/todos - Add a new todo
app.post("/api/todos", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const newTodo = new Todo({ title, description });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Body parser for requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory storage for tasks
const tasks = [];

// API Routes

// Get all tasks
app.get("/tasks", (req, res) => {
  try {
    if (tasks.length === 0) res.status(404).json("No Tasks found");
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  try {
    const taskId = req.params.id;
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new task
app.post("/tasks", (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: "Title and description are required" });
    }

    const newTask = {
      id: (tasks.length + 1).toString(),
      title,
      description,
      completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing task by ID
app.put("/tasks/:id", (req, res) => {
  try {
    const taskId = req.params.id;
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    }

    const { title, description, completed } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  try {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});

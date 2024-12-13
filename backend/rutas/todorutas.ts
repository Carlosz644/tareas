import express, { Request, Response } from "express";
import Todo from "../models/Todo";

const router = express.Router();

// Obtener todas las tareas
router.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar una tarea
router.post("/", async (req: Request, res: Response) => {
  const newTodo = new Todo({
    todo: req.body.todo,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

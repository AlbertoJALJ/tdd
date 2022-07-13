const TodoModel = require("../model/todo.model")

exports.createTodo = (req, res, next) => {
    const newTodo = TodoModel.create(req.body)
    res.status(201).json(newTodo)
}
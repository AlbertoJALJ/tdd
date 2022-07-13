const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: String,
    done: Boolean
})

const TodoModel = mongoose.model("Todo", TodoSchema)
module.exports = TodoModel
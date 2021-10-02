import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    todoBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
});

export const Todo = mongoose.model("Todo", TodoSchema);







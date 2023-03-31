import "./App.css"

import Todo from "./Todo"
import { List, Paper } from "@mui/material"

import React from "react"
import Hello from "./Hello"

const App = () => {
    const item = { id: 0, title: "Todo 1", done: true }
    return (
        <div className="App">
            <Hello />
            <Todo item={item} />
        </div>
    )
}

export default App

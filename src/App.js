import "./App.css"

import Todo from "./Todo"
import { List, Paper } from "@mui/material"

import React from "react"
import Hello from "./Hello"

const App = () => {
    const items = [
        { id: "ID-0", title: "Todo 1", done: false },
        { id: "ID-1", title: "Todo 2", done: true },
        { id: "ID-2", title: "Todo 3", done: false },
        { id: "ID-3", title: "Todo 4", done: false },
        { id: "ID-4", title: "Todo 5", done: false },
    ]

    const todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item, _) => (
                    <Todo item={item} key={item.id} />
                ))}
            </List>
        </Paper>
    )

    return (
        <div className="App">
            <Hello />
            {todoItems}
        </div>
    )
}

export default App

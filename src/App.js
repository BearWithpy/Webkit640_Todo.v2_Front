import "./App.css"

import Todo from "./Todo"
import { Container, List, Paper } from "@mui/material"

import React, { useState } from "react"
import AddTodo from "./AddTodo"

const App = () => {
    const [items, setItems] = useState([
        { id: "ID-0", title: "Todo 1", done: false },
        { id: "ID-1", title: "Todo 2", done: true },
        { id: "ID-2", title: "Todo 3", done: false },
        { id: "ID-3", title: "Todo 4", done: false },
        { id: "ID-4", title: "Todo 5", done: false },
    ])

    const add = (i) => {
        i.id = "ID-" + items.length
        i.done = false
        setItems([...items, i])
    }

    const del = (i) => {
        const newItems = items.filter((e) => e.id !== i.id)
        setItems(newItems)
    }
    ///////////////////////
    const edit = (i) => {
        const newItems = items.map((todo) =>
            todo.id === i.id ? { ...todo, title: i.title } : todo
        )
        console.log(newItems)

        // setItems(...newItems)
    }

    const toggleDone = (i) => {
        const newItems = items.map((todo) =>
            todo.id === i.id ? { ...todo, done: !todo.done } : todo
        )

        setItems(newItems)
    }
    /////////////////////
    const todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item, _) => (
                    <Todo
                        item={item}
                        key={item.id}
                        del={del}
                        edit={edit}
                        toggleDone={toggleDone}
                    />
                ))}
            </List>
        </Paper>
    )

    return (
        <div className="App">
            {/* <Hello /> */}
            <Container maxWidth="md">
                <AddTodo add={add} />
                <div className="todoList">{todoItems}</div>
            </Container>
        </div>
    )
}

export default App

import "./App.css"

import React, { Component } from "react"

import Todo from "./Todo"
import { Container, List, Paper } from "@mui/material"
import AddTodo from "./AddTodo"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { id: 0, title: "Hello 1", done: true },
                { id: 1, title: "Hello 2", done: false },
                { id: 2, title: "Hello 3", done: true },
                { id: 3, title: "Hello 4", done: false },
            ],
        }
    }

    add = (item) => {
        const thisItems = this.state.items
        item.id = "ID-" + thisItems.length
        item.done = false
        thisItems.push(item)
        this.setState({ items: thisItems })
    }

    render() {
        var todoItems = this.state.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List>
                    {this.state.items.map((item, idx) => (
                        <Todo item={item} key={item.id} />
                    ))}
                </List>
            </Paper>
        )
        return (
            <div className="App">
                <Container maxWidth="md">
                    <AddTodo add={this.add} />
                    <div className="todoList">{todoItems}</div>
                </Container>
            </div>
        )
    }
}

export default App

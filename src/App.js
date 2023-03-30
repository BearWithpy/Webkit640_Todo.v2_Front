import logo from "./logo.svg"
import "./App.css"

import React, { Component } from "react"
import Hello from "./Hello"
import Todo from "./Todo"
import { List, Paper } from "@material-ui/core"

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
        return <div className="App">{todoItems}</div>
    }
}

export default App

import logo from "./logo.svg"
import "./App.css"

import React, { Component } from "react"
import Hello from "./Hello"
import Todo from "./Todo"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: { id: 0, title: "Hello 1", done: true },
        }
    }

    render() {
        return (
            <div className="App">
                <Hello />
                <Todo item={this.state.item} />
            </div>
        )
    }
}

export default App

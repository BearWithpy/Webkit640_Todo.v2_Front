import "./App.css"

import React, { Component } from "react"

import Todo from "./Todo"
import { Container, List, Paper } from "@mui/material"
import AddTodo from "./AddTodo"
import { call } from "./service/ApiService"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    add = (item) => {
        call("/todo", "POST", item).then((res) => {
            this.setState({ items: res.data })
        })
    }

    delete = (item) => {
        call("/todo", "DELETE", item).then((res) => {
            this.setState({ items: res.data })
        })
    }

    update = (item) => {
        call("/todo", "PUT", item).then((res) => {
            this.setState({ items: res.data })
        })
    }

    componentDidMount() {
        call("/todo", "GET", null).then((res) => {
            this.setState({ items: res.data })
        })
    }

    render() {
        var todoItems = this.state.items.length > 0 && (
            <Paper style={{ margin: 16 }}>
                <List>
                    {this.state.items.map((item, idx) => (
                        <Todo
                            item={item}
                            key={item.id}
                            delete={this.delete}
                            update={this.update}
                        />
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

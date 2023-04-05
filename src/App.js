import "./App.css"

import React, { Component } from "react"

import Todo from "./Todo"
import {
    AppBar,
    Button,
    Container,
    Grid,
    List,
    Paper,
    Toolbar,
    Typography,
} from "@mui/material"
import AddTodo from "./AddTodo"
import { call, signout } from "./service/ApiService"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            loading: true,
        }
    }

    add = (item) => {
        call("/todo", "POST", item).then((response) =>
            this.setState({ items: response.data })
        )
    }

    delete = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            this.setState({ items: response.data })
        )
    }

    update = (item) => {
        call("/todo", "PUT", item).then((response) =>
            this.setState({ items: response.data })
        )
    }

    // deleteForCompleted = () => {
    //     const thisItems = this.state.items
    //     console.log("Before deleteForCompleted Items : ", this.state.items)
    //     thisItems.map((e) => {
    //         if (e.done === true) {
    //             call("/todo", "DELETE", e).then((response) =>
    //                 this.setState({ items: response.data })
    //             )
    //         }
    //     })
    // }

    componentDidMount() {
        call("/todo", "GET", null).then((response) =>
            this.setState({ items: response.data, loading: false })
        )
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

        var navigationBar = (
            <AppBar position="static">
                <Toolbar>
                    <Grid justifyContent="space-between" container>
                        <Grid item>
                            <Typography variant="h6">
                                {localStorage.getItem("USER_NAME")}의 오늘의
                                할일
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" onClick={signout}>
                                logout
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )

        var todoListPage = (
            <div>
                {navigationBar}
                <Container maxWidth="md">
                    <AddTodo add={this.add} />
                    <div className="TodoList">{todoItems}</div>
                </Container>
                {/* <DeleteTodo deleteForCompleted={this.deleteForCompleted} /> */}
            </div>
        )

        var loadingPage = <h1>로딩중..</h1>
        var content = loadingPage

        if (!this.state.loading) {
            content = todoListPage
        }

        return <div className="App">{content}</div>
    }
}

export default App

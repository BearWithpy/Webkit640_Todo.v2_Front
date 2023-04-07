import "./App.css"

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

import React, { useEffect, useState } from "react"
import AddTodo from "./AddTodo"
import call, { signout } from "./service/ApiService"
import DeleteTodo from "./DeleteTodo"

const App = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const add = (item) => {
        call("/todo", "POST", item).then((response) => setItems(response.data))
    }

    const del = (item) => {
        call("/todo", "DELETE", item).then((response) =>
            setItems(response.data)
        )
    }

    const update = (item) => {
        call("/todo", "PUT", item).then((response) => setItems(response.data))
    }

    const deleteCompleted = () => {
        const completedItems = items.filter((e) => e.done === true)
        completedItems.map((item) =>
            call("/todo", "DELETE", item).then((response) =>
                setItems(response.data)
            )
        )
    }

    const deleteAll = () => {
        items.map((item) => call("/todo", "DELETE", item))
        setItems([])
    }

    useEffect(() => {
        call("/todo", "GET", null).then((response) => {
            setItems(response.data)
            setLoading(false)
        })
    }, [])

    const navigationBar = (
        <AppBar position="static">
            <Toolbar>
                <Grid justifyContent="space-between" container>
                    <Grid item>
                        <Typography variant="h6">
                            {localStorage.getItem("USER_NAME")}의 오늘의 할일
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

    const todoItems = items.length > 0 && (
        <Paper style={{ margin: 16 }}>
            <List>
                {items.map((item, idx) => (
                    <Todo item={item} key={item.id} del={del} update={update} />
                ))}
            </List>
        </Paper>
    )

    const todoListPage = (
        <div>
            {navigationBar}
            <Container maxWidth="md">
                <AddTodo add={add} />
                <div className="TodoList">{todoItems}</div>
                <DeleteTodo
                    deleteCompleted={deleteCompleted}
                    deleteAll={deleteAll}
                />
            </Container>
        </div>
    )

    const loadingPage = <h1>Loading...</h1>
    const content = loading ? loadingPage : todoListPage

    return <div className="App">{content}</div>
}

export default App

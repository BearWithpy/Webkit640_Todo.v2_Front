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
import Pagination from "./Pagination"

const App = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    /////

    // eslint-disable-next-line
    const [limit, setLimit] = useState(8)

    const [page, setPage] = useState(1)

    const [totalLength, setTotalLength] = useState(0)

    const offset = (page - 1) * limit

    ////

    const add = (item) => {
        call("/todo", "POST", item).then((response) => {
            setTotalLength(response.data.length)
            setItems(response.data.slice(offset, offset + limit))
            setPage(Math.ceil(response.data.length / limit))
            // setItems(response.data)
        })
    }

    const del = (item) => {
        call("/todo", "DELETE", item).then((response) => {
            setTotalLength(response.data.length)
            if (response.data.slice(offset, offset + limit).length === 0) {
                setPage(page - 1)
            }
            setItems(response.data.slice(offset, offset + limit))

            // setItems(response.data)
        })
    }

    const update = (item) => {
        call("/todo", "PUT", item).then((response) => {
            setTotalLength(response.data.length)
            setItems(response.data.slice(offset, offset + limit))
            // setItems(response.data)
        })
    }

    const deleteCompleted = () => {
        const completedItems = items.filter((item) => item.done === true)
        completedItems.map((item) =>
            call("/todo", "DELETE", item).then((response) => {
                setTotalLength(response.data.length)
                setItems(response.data.slice(offset, offset + limit))
                // setItems(response.data)
            })
        )
    }

    const deleteAll = () => {
        call("/todo", "GET", null)
            .then((response) => {
                setItems(response.data)

                response.data.map((item) =>
                    call("/todo", "DELETE", item).then((response) => {
                        setItems(response.data)
                    })
                )
            })
            .then(() => {
                setTotalLength(0)
                setItems([])
                setPage(0)
            })
    }

    useEffect(() => {
        call("/todo", "GET", null).then((response) => {
            setItems(response.data)
            setTotalLength(response.data.length)
            setPage(page)
            setItems(response.data.slice(offset, offset + limit))
            setLoading(false)
        })
        // eslint-disable-next-line
    }, [page])

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
                {items.map((item, _) => (
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
                <Pagination
                    total={totalLength}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
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

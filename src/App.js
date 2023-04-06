import "./App.css"

import Todo from "./Todo"
import { Container, List, Paper } from "@mui/material"

import React, { useEffect, useState } from "react"
import AddTodo from "./AddTodo"
import { call } from "./service/ApiService"

const App = () => {
    // const [items, setItems] = useState([
    //     { id: "ID-0", title: "Todo 1", done: false },
    //     { id: "ID-1", title: "Todo 2", done: true },
    //     { id: "ID-2", title: "Todo 3", done: false },
    //     { id: "ID-3", title: "Todo 4", done: false },
    //     { id: "ID-4", title: "Todo 5", done: false },
    // ])

    // const add = (i) => {
    //     i.id = "ID-" + items.length
    //     i.done = false
    //     setItems([...items, i])
    // }

    // const del = (i) => {
    //     const newItems = items.filter((e) => e.id !== i.id)
    //     setItems(newItems)
    // }
    // ///////////////////////
    // const edit = (i) => {
    //     const newItems = items.filter((e) => e.id !== i.id)
    //     i.id = "ID-" + items.length
    //     setItems(...newItems)
    // }

    // const toggleDone = (i) => {
    //     const newItems = items.filter((e) => e.id === i.id)
    //     console.log(newItems)
    //     // i.id = "ID-" + items.length
    //     // setItems(...newItems)
    // }
    // /////////////////////
    // const todoItems = items.length > 0 && (
    //     <Paper style={{ margin: 16 }}>
    //         <List>
    //             {items.map((item, _) => (
    //                 <Todo item={item} key={item.id} del={del} />
    //             ))}
    //         </List>
    //     </Paper>
    // )

    // return (
    //     <div className="App">
    //         {/* <Hello /> */}
    //         <Container maxWidth="md">
    //             <AddTodo add={add} />
    //             <div className="todoList">{todoItems}</div>
    //         </Container>
    //     </div>
    // )

    const [items, setItems] = useState([])

    const [todoItems, setTodoItems] = useState("")

    // add 함수 추가
    const add = (item) => {
        // const thisItems = items
        // item.id = "ID-" + thisItems.length
        // item.done = false
        // thisItems.push(item)

        call("/todo", "POST", item).then((response) => {
            console.log(response.data)
            // setItems(response.data)
        })

        // setItems(thisItems)
        // setTodoItems(
        //     items.length > 0 && (
        //         <Paper style={{ margin: 16 }}>
        //             <List>
        //                 {items.map((item, idx) => (
        //                     <Todo item={item} key={item.id} />
        //                 ))}
        //             </List>
        //         </Paper>
        //     )
        // )
    }

    useEffect(() => {
        setTodoItems(
            items.length > 0 && (
                <Paper style={{ margin: 16 }}>
                    <List>
                        {items.map((item, idx) => (
                            <Todo item={item} key={item.id} />
                        ))}
                    </List>
                </Paper>
            )
        )
    }, [])

    return (
        <div className="App">
            <Container maxWidth="md">
                <AddTodo add={add} />
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>
    )
}

export default App

import "./App.css"

import Todo from "./Todo"
import { List, Paper } from "@mui/material"

import React from "react"
import Hello from "./Hello"

const App = () => {
    // const todoItems = this.state.items.length > 0 && (
    //     <Paper style={{ margin: 16 }}>
    //         <List>
    //             {this.state.items.map((item, idx) => (
    //                 <Todo item={item} key={item.id} />
    //             ))}
    //         </List>
    //     </Paper>
    // )
    return (
        <div className="App">
            <Hello />
        </div>
    )
}

export default App

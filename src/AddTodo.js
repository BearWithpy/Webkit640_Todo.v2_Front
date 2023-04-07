import { Button, Grid, Paper, TextField } from "@mui/material"
import React, { useState } from "react"

const AddTodo = ({ add }) => {
    const [item, setItem] = useState({ title: "" })

    const onInputChange = (e) => {
        let newItem = { ...item }
        newItem.title = e.target.value
        setItem(newItem)
    }

    const onButtonClick = () => {
        add(item)
        setItem({ title: "" })
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            onButtonClick()
        }
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placehoder="Add Todo here"
                        fullWidth
                        onChange={onInputChange}
                        value={item.title}
                        onKeyPress={enterKeyEventHandler}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        style={{ height: "3.5rem" }}
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={onButtonClick}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo

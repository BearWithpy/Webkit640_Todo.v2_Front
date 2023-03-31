import { Button, Grid, Paper, TextField } from "@mui/material"
import React, { useState } from "react"

const AddTodo = ({ add }) => {
    const [item, setItem] = useState({ title: "" })

    const onInputChange = (e) => {
        item.title = e.target.value
        setItem({ title: item.title })
    }
    const onButtonClick = (e) => {
        add(item)
        setItem({ title: "" })
    }
    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            onButtonClick()
        }
    }

    return (
        <div>
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Add Todo here :)"
                            fullWidth
                            onChange={onInputChange}
                            value={item.title}
                            onKeyDown={enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
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
        </div>
    )
}

export default AddTodo

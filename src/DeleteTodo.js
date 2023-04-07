import { DeleteOutlined } from "@mui/icons-material"
import { Grid, IconButton, Paper } from "@mui/material"
import React from "react"

const DeleteTodo = ({ deleteCompleted, deleteAll }) => {
    const deleteEventHandler = () => {
        deleteCompleted()
    }

    const deleteAllEventHandler = () => {
        deleteAll()
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid justifyContent="right" container>
                <Grid item>
                    <div>
                        Delete Completed Items ON THIS PAGE
                        <IconButton
                            aria-label="Delete Completed Items"
                            onClick={deleteEventHandler}
                        >
                            <DeleteOutlined />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <Grid justifyContent="right" container>
                <Grid item>
                    <div style={{ color: "crimson", fontWeight: "bold" }}>
                        [Warning!] DELETE ALL TODOs
                        <IconButton
                            aria-label="Delete All Items"
                            onClick={deleteAllEventHandler}
                        >
                            <DeleteOutlined />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DeleteTodo

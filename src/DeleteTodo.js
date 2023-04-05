import { DeleteOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React, { Component } from "react"

class DeleteTodo extends Component {
    constructor(props) {
        super(props)
        this.delete = props.deleteForCompleted
    }

    deleteEventHandler = () => {
        console.log("delete completed Todo")
        this.delete()
    }

    render() {
        return (
            <div>
                Delete Completed Item
                <IconButton
                    aria-label="Delete Completed Todo"
                    onClick={this.deleteEventHandler}
                >
                    <DeleteOutlined />
                </IconButton>
            </div>
        )
    }
}

export default DeleteTodo

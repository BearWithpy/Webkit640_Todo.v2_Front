import { DeleteOutlined } from "@mui/icons-material"
import {
    Checkbox,
    IconButton,
    InputBase,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material"

import React, { Component } from "react"

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
            readOnly: true,
        }
        this.delete = props.delete
        this.update = props.update
    }

    checkBoxEventHandler = (e) => {
        const thisItem = this.state.item
        thisItem.done = !thisItem.done
        this.setState({ readOnly: true })
        this.update(this.state.item)
    }

    deleteEventHandler = (e) => {
        this.delete(this.state.item)
    }

    offReadOnlyMode = () => {
        this.setState({ readOnly: false }, () => {
            console.log("readOnly? ", this.state.readOnly)
        })
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item
        thisItem.title = e.target.value
        this.setState({ item: thisItem })
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.setState({ readOnly: true })
            this.update(this.state.item)
        }
    }

    render() {
        return (
            <ListItem>
                <Checkbox
                    checked={this.state.item.done}
                    onChange={this.checkBoxEventHandler}
                />
                <ListItemText>
                    <InputBase
                        inputProps={{
                            "aria-label": "naked",
                            readOnly: this.state.readOnly,
                        }}
                        type="text"
                        id={String(this.state.item.id)}
                        name={String(this.state.item.id)}
                        value={this.state.item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onChange={this.editEventHandler}
                        onKeyDown={this.enterKeyEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={this.deleteEventHandler}
                    >
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Todo

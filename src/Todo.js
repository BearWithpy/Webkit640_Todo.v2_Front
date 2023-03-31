import { Checkbox, InputBase, ListItem, ListItemText } from "@mui/material"

import React, { Component } from "react"

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
        }
    }
    render() {
        return (
            <ListItem>
                <Checkbox checked={this.state.item.done} />
                <ListItemText>
                    <InputBase
                        inputProps={{ "aria-label": "naked" }}
                        type="text"
                        id={String(this.state.item.id)}
                        name={String(this.state.item.id)}
                        value={this.state.item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
            </ListItem>
        )
    }
}

export default Todo

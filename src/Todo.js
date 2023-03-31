import { Checkbox, InputBase, ListItem, ListItemText } from "@mui/material"

import React from "react"

const Todo = (props) => {
    return (
        <ListItem>
            <Checkbox checked={props.item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={String(props.item.id)}
                    name={String(props.item.id)}
                    value={props.item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
}

export default Todo

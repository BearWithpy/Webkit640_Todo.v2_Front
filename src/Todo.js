import { Checkbox, InputBase, ListItem, ListItemText } from "@mui/material"

import React from "react"

const Todo = ({ item }) => {
    return (
        <ListItem>
            <Checkbox checked={item.done} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={String(item.id)}
                    name={String(item.id)}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
}

export default Todo

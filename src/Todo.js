import { Checkbox, InputBase, ListItem, ListItemText } from "@mui/material"

import React, { useState } from "react"

const Todo = ({ item, del }) => {
    const [editItem, setEditItem] = useState(item)

    const deleteEventHandler = () => {
        del(item)
    }

    const editEventHandler = (e) => {
        editItem.title = e.target.value
    }

    const checkBoxEventHandler = (e) => {
        item.done = !item.done
    }

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

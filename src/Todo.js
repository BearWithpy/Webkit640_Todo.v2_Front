import { DeleteOutlined } from "@mui/icons-material"
import {
    Checkbox,
    IconButton,
    InputBase,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material"

import React, { useState } from "react"

const Todo = ({ item, del }) => {
    const [itemState, setItemState] = useState(item)

    const deleteEventHandler = () => {
        del(item)
    }

    // const editEventHandler = (e) => {
    //     itemState.title = e.target.value
    // }

    const checkBoxEventHandler = (e) => {
        console.log(itemState)
        itemState.done = !itemState.done
        setItemState(itemState)
    }

    return (
        <ListItem>
            <Checkbox
                checked={itemState.done}
                onChange={checkBoxEventHandler}
            />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={String(itemState.id)}
                    name={String(itemState.id)}
                    value={itemState.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo

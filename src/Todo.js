import { DeleteOutlined } from "@mui/icons-material"
import {
    Checkbox,
    IconButton,
    InputBase,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material"

import React, { useEffect, useState } from "react"

const Todo = (props) => {
    const [item, setItem] = useState(props.item)
    const [readOnly, setReadOnly] = useState(true)
    const deleteItem = props.del
    const updateItem = props.update

    const [lineStyle, setlineStyle] = useState({
        textDecoration: "none",
    })

    useEffect(() => {
        setlineStyle(
            item.done
                ? {
                      textDecoration: "line-through",
                  }
                : {
                      textDecoration: "none",
                  }
        )
    }, [item.done])

    const deleteEventHandler = () => {
        deleteItem(item)
    }

    const offReadOnlyMode = () => {
        setReadOnly(false)
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true)
            updateItem(item)
        }
    }

    const editEventHandler = (e) => {
        const thisItem = { ...item }
        thisItem.title = e.target.value
        setItem(thisItem)
    }

    const checkboxEventHander = (e) => {
        const thisItem = { ...item }
        // thisItem.done = !thisItem.done
        thisItem.done = thisItem.done ? false : true
        setItem(thisItem)
        setReadOnly(true)
        updateItem(thisItem)
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHander} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly: readOnly,
                    }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={offReadOnlyMode}
                    onChange={editEventHandler}
                    onKeyPress={enterKeyEventHandler}
                    style={lineStyle}
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

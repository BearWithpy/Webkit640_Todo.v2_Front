import { DeleteOutlined } from "@mui/icons-material"
import {
    Checkbox,
    IconButton,
    InputBase,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material"
import { useState } from "react"

const Todo = ({ item, del, toggleDone, edit }) => {
    const [readOnly, setReadOnly] = useState(true)
    const [thisItem, setThisItem] = useState(item)

    const checkBoxEventHandler = (e) => {
        thisItem.done = !thisItem.done
        // setThisItem(thisItem)
        toggleDone(thisItem)
        // setReadOnly(true)
    }

    const deleteEventHandler = (e) => {
        del(item)
    }

    const offReadOnlyMode = () => {
        setReadOnly(false)
    }

    const editEventHandler = (e) => {
        thisItem.title = e.target.value
        // setThisItem(thisItem)
    }

    const enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            setReadOnly(true)
            edit(thisItem)
        }
    }

    return (
        <ListItem>
            <Checkbox checked={thisItem.done} onChange={checkBoxEventHandler} />
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label": "naked",
                        readOnly,
                    }}
                    type="text"
                    id={String(item.id)}
                    name={String(item.id)}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={offReadOnlyMode}
                    onChange={editEventHandler}
                    onKeyDown={enterKeyEventHandler}
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

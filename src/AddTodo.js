import { Grid, Paper } from "@mui/material"
import React, { Component } from "react"

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = { item: { title: "" } }
        this.add = props.add
    }

    onInputChange = (e) => {
        const thisItem = this.state.item
        thisItem.title = e.target.value
        this.setState({ item: thisItem })
        // console.log(thisItem)
    }

    onButtonClick = (e) => {
        this.add(this.state.item)
        this.setState({ item: { title: "" } })
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.onButtonClick()
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo

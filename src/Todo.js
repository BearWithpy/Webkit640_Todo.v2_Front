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
            <div className="Todo">
                <input
                    type="checkbox"
                    id={this.state.item.id}
                    name={this.state.item.id}
                    checked={this.state.item.done}
                />
                <label for={this.state.item.id}>{this.state.item.title}</label>
            </div>
        )
    }
}

export default Todo

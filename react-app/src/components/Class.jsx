import React, { Component } from 'react'

export default class Class extends Component {

    constructor() {
        super()
        this.state = {
            t: "fsadf"
        }

        console.log("constructor");
    }

    componentDidMount() {
        console.log("mounted");

        this.forceUpdate();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        return (
            <div>{this.state.t}</div>
        )
    }
}

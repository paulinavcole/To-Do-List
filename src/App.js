import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class App extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }
    async componentDidMount() {
        const tasks = (await axios.get('/api/tasks')).data
        this.setState({tasks})
    }
    render() {
        return (
            <div>
                {
                    this.state.tasks.map( task => {
                        return (
                            <Task task={task} />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
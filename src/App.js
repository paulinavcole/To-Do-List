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
        const response = await axios.get('/api/tasks');
        this.setState({ tasks: response.data});
    }
    render() {
        const {tasks} = this.state;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <h2>Tasks ({tasks.length})</h2>
                    <ul>
                        {
                        tasks.map(task => {
                            return (
                                <li>{task.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )};
};

export default App;
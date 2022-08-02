import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css'
class App extends Component {
    //always use the class syntax if we want a component to have state
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(items => {
            this.setState({ robots: items })
        })
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1>Loading Users...</h1>
        } else {
            return (
                <div className="tc">
                    <h1>PARTYBUDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div >

            )
        }

    }

}

export default App;
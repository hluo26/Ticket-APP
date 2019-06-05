import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";

export function call({ match }) {
    return (<h3>Requested Param: {match.params.id}</h3>);
}

class Taxi extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <h2>Taxi</h2>

                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/id`}>ID</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.path}/:id`} component={call} />
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        );
    }
}

export default Taxi;
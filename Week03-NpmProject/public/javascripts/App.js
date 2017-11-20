import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'I hope this works now.',
            foo: 'waiting for server'
        };
    }

    bar = () => {
        const that = this;
        fetch('/index/package-info')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(package_info => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    };
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.package-info} file: {this.state.file}
                </p>
                <button onClick={this.bar}>Bar</button>
            </div>
        );
    }
}

export default App;
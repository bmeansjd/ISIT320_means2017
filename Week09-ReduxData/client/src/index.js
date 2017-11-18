
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
const config = require('isit-code-lastname').elfConfig;

---

    router.get('/getConfig', function(req, res, next) { 'use strict';
        config.loadAsync()
            .then(function(configuration) {
                // WRITE CODE TO SEND THE CONFIGURATION
                // VIA HTTP
                response.send(configuration)
            })
            .catch(function(err) {
                throw err
            })
    });
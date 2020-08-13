import React from 'react';
import { render } from 'react-dom';

import Home from './routes/Home';
import ResultView from './routes/Result';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/results" component={ResultView} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

render(<App />, document.getElementById('root'));

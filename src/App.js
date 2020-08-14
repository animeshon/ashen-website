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
                <Route exact={true} path='/results' component={ResultView} />
                <Route exact={true} path='/' component={Home} />
                {/* <Route exact={true} path='*' component={NotFound} /> */}
            </Switch>
        </Router>
    );
}

render(<App />, document.getElementById('root'));

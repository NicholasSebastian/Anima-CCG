import React, { useState } from 'react';
import { Route } from 'react-router';
import './styles.css';

import Home from './pages/Home';
import Game from './pages/Game';
import FetchData from './pages/FetchData';

function App() {
    return (
        <div id='frame'>
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/fetch-data' component={FetchData} />
        </div>
    );
}

export default App;
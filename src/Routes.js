import React from 'react';
import Home from './Home.js';
import { Routes, Route } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
    )
}

export default Router;
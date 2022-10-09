import React from 'react';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Home from '../pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
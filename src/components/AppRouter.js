import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// app components
import HomePage from '../pages/HomePage';
import Produto from '../pages/Produto';

// This component will house all routes of the app.

export default function AppRouter() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="/:slug" element={<Produto />} />
                </Routes>
            </Router>
        </Fragment>
    );
}

// Route example: add more of these if you need more paths
// <Route path="/join" element={<RoomJoinPage />}/>
// Don't forget to add these paths to the Django URLs so it won't block you from going there!
// <Route path="register" element={<RegistrationForm />}/>
// import RegistrationForm from "./RegistrationForm";

// <Route path="logout" element={<Logout />} />
// <Route path=":username" element={<UserProfile />} />
//

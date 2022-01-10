import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/profile/*" element={<ProfileContainer />}  />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
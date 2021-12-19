import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
        
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}  />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
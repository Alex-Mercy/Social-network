import React, { Component, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarMUI from "./components/Navbar/NavbarMUI";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class  App extends Component  {
    componentDidMount() {
        this.props.initializeApp()
    }

    render () {
        if(!this.props.initialized) {
            return <Preloader />
        }
        

        
    return (
        
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarMUI />
                <div className="app-wrapper__content">
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/profile/*" element={<ProfileContainer />}  />
                        <Route path="/" element={<ProfileContainer />}  />
                        </Routes>
                        </Suspense>
                        <Routes>
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/*" element={<div>404 NOT FOUND</div>} />
                        </Routes>
                    
                    
                </div>
            </div>
        
    )
}
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
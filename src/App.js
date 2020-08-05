import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/profile'
                    render={() => <Profile />} />
                <Route path='/dialogs'
                    render={() => <DialogsContainer />} />
                <Route path='/news'
                    render={() => <News />} />
                <Route path='/music'
                    render={() => <Music />} />
                <Route path='/settings'
                    render={() => <Settings />} />
                <Route path='/users'
                    render={() => <UsersContainer />} />
            </div>
        </div>
    )
}

export default App;

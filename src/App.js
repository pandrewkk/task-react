import React from "react";
import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/messages'
                           render={() => <Dialogs store={props.store}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

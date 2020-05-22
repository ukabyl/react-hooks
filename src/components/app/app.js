import React from 'react'
import Navbar from '../navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/home';
import Info from '../../pages/info';
import Profile from '../../pages/profile';
import AlerState from '../../context/alert/alertState';
import GithubState from '../../context/github/githubState';

const App = () => {
    return (
        <GithubState>
            <AlerState>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/react-hooks" exact component={HomePage} />
                        <Route path="/info/" component={Info} />
                        <Route path="/profile/:name" component={Profile}  />
                    </Switch>
                </BrowserRouter>
            </AlerState> 
        </GithubState>
    )
}

export default App;

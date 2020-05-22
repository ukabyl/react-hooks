import React, { useReducer } from 'react';
import { GithubContext } from './githubContext';
import { githubReducer } from './githubReducer';
import axios from 'axios';
import { SEARCH_USERS, GET_USER, GET_REPOS, SET_LOADING, CLEAR_USERS } from '../types';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function withCreds(url) {
    return `${url}client_id=${CLIENT_ID}&client_secret&=${CLIENT_SECRET}`;
}

const GithubState = ({ children }) => {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState);
    
    async function searchUsers(value) {

        setLoading();

        const response = await axios.get(
            withCreds(`https://api.github.com/search/users?q=${value}&`)
        )
        dispatch({
            type: SEARCH_USERS,
            payload: response.data
        })
    }

    async function getUser(value) {

        setLoading();

        const response = await axios.get(
            withCreds(`https://api.github.com/users/${value}?`)
        )

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    async function getRepos(name) {

        setLoading();
        
        const response = await axios.get(
            withCreds(`https://api.github.com/users/${name}/repos?`)
        )

        dispatch({
            type: GET_REPOS,
            payload: response.data
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING });
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    return (
        <GithubContext.Provider value={{
            searchUsers, getRepos, getUser,
            clearUsers, setLoading, ...state
        }}>
            {
                children
            }
        </GithubContext.Provider>
    );
}

export default GithubState;

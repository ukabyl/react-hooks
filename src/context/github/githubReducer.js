import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from "../types";

const handlers = {
    [SEARCH_USERS]: (state, { payload }) => ({...state, users: payload.items, loading: false}),
    [GET_USER]: (state, { payload }) => ({...state, user: payload, loading: false}), 
    [GET_REPOS]: (state, { payload }) => ({...state, repos: payload, loading: false}), 
    [CLEAR_USERS]: (state) => ({...state, users: []}),  
    [SET_LOADING]: (state) => ({...state, loading: true})
}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
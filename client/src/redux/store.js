import { composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers';

// const initialState = JSON.parse(localStorage.getItem('kackle')) || undefined
const initialState = undefined

const composeEnhancers = composeWithDevTools({})

const localStorageMiddleware = storeAPI => next => action => {
    // const state = storeAPI.getState()
    // localStorage.setItem('kackle', JSON.stringify(state))
    return next(action)
}

const middlewareEnhancer = applyMiddleware(localStorageMiddleware)

const store = createStore(rootReducer, initialState, composeEnhancers(middlewareEnhancer))

export default store;
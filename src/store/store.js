import { createStore, combineReducers, applyMiddleware } from 'redux';
import allTextValueReducer from '../reducer/reducer';

const rootReducer = combineReducers(
    { allTextVlaue: allTextValueReducer }
)

export default function configureStore() {

    return createStore(rootReducer)
}
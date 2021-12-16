import {combineReducers} from 'redux';
import { allContactsReducer } from './allContactsReducer';
import { newContactReducer } from './newContactReducer';
import { RecentReducer } from './RecentReducer';


const allReducers = combineReducers({
    allContacts : allContactsReducer,
    newContact: newContactReducer,
    recent : RecentReducer
})

export default allReducers;
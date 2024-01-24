import { createStore } from 'redux';
import gameReducer from '../reducer/reducer';


const store = createStore(gameReducer);

export default store;

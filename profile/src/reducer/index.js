import { combineReducers } from 'redux';
import counterReducer  from './counterReducer';

 const reducer  = combineReducers({
    countList:counterReducer
});
export default reducer;
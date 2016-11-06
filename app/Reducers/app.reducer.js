import { combineReducers } from 'redux'
import pixivList from './pixivList.reducer.js'
import userIcon from './UserIcon.reducer.js'

const App = combineReducers({
	pixivList,
	userIcon
});

export default App
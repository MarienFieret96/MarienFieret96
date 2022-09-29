import { SIDEBAR_OPEN, SIDEBAR_CLOSE, TOGGLE_THEME } from "../actions";

const main_reducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return { ...state, isSidebarOpen: true };
	}
	if (action.type === SIDEBAR_CLOSE) {
		return { ...state, isSidebarOpen: false };
	}
	if (action.type === TOGGLE_THEME) {
		const isDarkmodeOn = state.isDarkmodeOn;
		if (isDarkmodeOn) {
			return { ...state, isDarkmodeOn: false };
		} else {
			return { ...state, isDarkmodeOn: true };
		}
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default main_reducer;

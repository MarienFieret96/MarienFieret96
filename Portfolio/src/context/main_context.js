import React, { useContext, useEffect, useReducer } from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, TOGGLE_THEME } from "../actions";
import reducer from "../reducers/main_reducers";

const getLocalStorage = () => {
	let obj = localStorage.getItem("theme");
	let theme = JSON.parse(obj);
	return theme;
};

const initialState = {
	isDarkmodeOn: getLocalStorage(),
	isSidebarOpen: false,
};

const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const switchTheme = () => {
		dispatch({ type: TOGGLE_THEME });
	};

	useEffect(() => {
		if (state.isDarkmodeOn) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.add("light");
		}
	}, []);

	useEffect(() => {
		if (state.isDarkmodeOn) {
			document.body.classList.replace("dark", "light");
			localStorage.setItem("theme", true);
		} else {
			document.body.classList.replace("light", "dark");
			localStorage.setItem("theme", false);
		}
	}, [state.isDarkmodeOn]);

	return (
		<MainContext.Provider
			value={{ ...state, switchTheme, openSidebar, closeSidebar }}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => {
	return useContext(MainContext);
};

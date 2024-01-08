import React, { useReducer } from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import {
	MovieContext,
	MovieDispatchContext,
} from "../../reducers/MovieContext";
import useMoviesHooks, {
	initialMovieState,
} from "../../reducers/useMoviesReducer";

function RootLayout() {
	// reducer for fetching and and working with the movies data
	const { movieReducer } = useMoviesHooks();
	// useReducer to manage the state and action that can be performed on the movies data
	const [state, dispatch] = useReducer(movieReducer, initialMovieState);
	// I created Two context so as to avoid props drilling
	return (
		<>
			<MovieContext.Provider value={state}>
				<MovieDispatchContext.Provider value={dispatch}>
					{/* Navbar */}
					<Navbar />
					<Outlet />
				</MovieDispatchContext.Provider>
			</MovieContext.Provider>
		</>
	);
}

export default RootLayout;

import Filter from "../components/Filter";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { MovieContext, MovieDispatchContext } from "../reducers/MovieContext";
import useMoviesHooks, {
	initialMovieState,
} from "../reducers/useMoviesReducer";
import { useReducer } from "react";

export default function Home() {
	return (
		<>
			{/* Filter Section */}
			<Filter />
			{/* MovieList Section */}
			<MovieList />
		</>
	);
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/layout/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import MovieDetails from "./pages/MovieDetails";

// Create a browser router
const router = createBrowserRouter([
	{
		// The home Route Layout which house the Navbar 
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			// House the Filter and MovieList Component and both are children of the RootLayout
			{
				path: "/",
				element: <Home />,
			},
			// The takes us to the movie Trailer for a specific movie
			{
				path: "/movies/:movieId",
				element: <MovieDetails />,
			},
		],
	},
]);
export default function App() {
	// We are using the router Provider 
	return <RouterProvider router={router}></RouterProvider>;
}

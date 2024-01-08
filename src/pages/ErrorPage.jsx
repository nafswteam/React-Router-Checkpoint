import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";


// This handles any error in our application
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className=" w-screen h-screen overflow-hidden">
			{/* Navbar */}
			<Navbar />
			<div className="flex flex-col justify-center items-center space-y-10 font-poppings w-full h-full">
				<h1 className="text-red-600 text-4xl">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i className="text-red-500 text-xl">
						{error.statusText || error.message}
					</i>
				</p>
			</div>
		</div>
	);
}

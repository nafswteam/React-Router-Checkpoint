import { useParams } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { TiChevronLeft } from "react-icons/ti";
import useMovies from "../hooks/useMovies";

export default function MovieDetails() {
	const movies = useMovies();
	const { movieId } = useParams();
	const currentMovie = movies.find((movie) => Number(movieId) === movie.id);
	return (
		<div className="max-w-lg ml-3 md:ml-24">
			<Link
				to="/"
				className="flex gap-2 items-center text-blue-500 font-poppings text-md p-3 pt-5"
			>
				<TiChevronLeft /> Back to Home
			</Link>
			<div className="font-poppings px-4 space-y-5">
				<h2 className="text-blue-800 text-2xl font-medium border-l-8 border-blue-800 pl-2">
					{currentMovie.title || "No Title"}
				</h2>
				<div className="w-[100px] bg-red-500">
					<iframe
						src={
							currentMovie?.trailer ||
							"https://www.youtube.com/embed/lV1OOlGwExM"
						}
						frameBorder="0"
						allowFullScreen
						className="w-[350px] h-[350px]  sm:w-[500px] md:w-[640px]"
					></iframe>
				</div>

				<p className="text-gray-800 leading-8">
					{currentMovie.description}
				</p>
				<div className="space-y-3">
					<div>
						<span className="font-bold pr-2 text-gray-800">
							Original Language:
						</span>
						English
					</div>
					<div>
						<span className="font-bold pr-2 text-gray-800">
							Producer:
						</span>
						{currentMovie.producer || "John Melody"}
					</div>
					<div>
						<span className="font-bold pr-2 text-gray-800">
							Release Date:
						</span>
						{moment(currentMovie.releasedYear).format(
							"MMM Do YY"
						) || moment(Date.now()).format("MMM Do YY")}
					</div>
					<div>
						<span className="font-bold pr-2 text-gray-800">
							Distributor:
						</span>
						Fathom Events
					</div>
					<div>
						<span className="font-bold pr-2 text-gray-800">
							Official Poster:
						</span>
						<img
							src={currentMovie.posterUrl}
							className="w-[300px] h-[300px] object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

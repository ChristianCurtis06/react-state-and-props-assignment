import { useState } from "react";
import MovieItem from './MovieItem';

// Task 1: Initializing and Displaying a List
const MoviesList = () => {
    const [movies, setMovies] = useState([
        {title: "Inception", genre: "Action", details: "Inception is a 2010 science fiction action heist film written and directed by Christopher Nolan, who also produced it with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Cillian Murphy, Tom Berenger, Dileep Rao, and Michael Caine."},
        {title: "Remember the Titans", genre: "Sports Drama", details: "Remember the Titans is a 2000 American biographical sports drama film produced by Jerry Bruckheimer and directed by Boaz Yakin. The screenplay by Gregory Allen Howard is loosely based on the true story of coach Herman Boone, portrayed by Denzel Washington, and his attempt to integrate the T. C. Williams High School (now Alexandria City High School) football team in Alexandria, Virginia in 1971. Will Patton portrays Bill Yoast, Boone's assistant coach. Real-life athletes Gerry Bertier and Julius Campbell are portrayed by Ryan Hurst and Wood Harris."},
        {title: "Tenet", genre: "Action", details: "Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who also produced it with his wife Emma Thomas. It stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh. The film follows a former CIA agent who is recruited into a secret organization, tasked with tracing the origin of objects that are traveling backward through time and their connection to an attack from the future to the present."},
        {title: "The Notebook", genre: "Romantic Drama", details: "The Notebook is a 2004 American romantic drama film directed by Nick Cassavetes, from a screenplay by Jeremy Leven and Jan Sardi, and based on the 1996 novel of the same name by Nicholas Sparks. The film stars Ryan Gosling and Rachel McAdams as a young couple who fall in love in the 1940s. Their story is read from a notebook in the present day by an elderly man, telling the tale to a fellow nursing home resident."}
    ]);

    const [showAllMovies, setShowAllMovies] = useState(true);

    // Task 3: Implementing Movie Removal
    const removeMovie = (index) => {
        setMovies((movies) => movies.filter((_, i) => i !== index));
    };

    // Task 4: Toggling List View
    const filteredMovies = showAllMovies ? movies : movies.filter((movie) => movie.genre === "Action");

    return (
        <div className="movie-page">
            <button onClick={() => setShowAllMovies(!showAllMovies)}>
                {showAllMovies ? 'Show Action Movies' : 'Show All Movies'}
            </button>

            <h1>Movies</h1>
            <ul className="movie-list">
                {filteredMovies.map((movie, index) => (
                    <li key={index} className="movie">
                        <MovieItem movie={movie} />
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
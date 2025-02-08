// Task 2: Conditional Rendering of Movie Details
import { useState } from "react";

const MovieItem = ({ key, movie }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div onClick={() => setShowDetails(!showDetails)}>
            <h2>{movie.title} - {movie.genre}</h2>
            {showDetails && <p>{movie.details}</p>}
        </div>
    );
};

export default MovieItem;
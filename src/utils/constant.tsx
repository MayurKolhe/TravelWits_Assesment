import { Movie } from "./component_Interface"; // Import the Movie type definition
import { Star, StarBorder, StarHalf } from "@mui/icons-material"; // Import Material-UI star icons

// Array of movie objects with their details
export const moviesData: Movie[] = [
  { title: "The Matrix", rating: 7.5, category: "Action" },
  { title: "Focus", rating: 6.9, category: "Comedy" },
  { title: "The Lazarus Effect", rating: 6.4, category: "Thriller" },
  { title: "Everly", rating: 5.0, category: "Action" },
  { title: "Maps to the Stars", rating: 7.5, category: "Drama" },
];

// Function to render star icons based on the rating
export const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 11; i++) {
    if (i <= Math.floor(rating)) {
      // Add a filled star for each whole number in the rating
      stars.push(<Star key={i} style={{ color: "black" }} />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // Add a half star if the rating has a decimal part
      stars.push(<StarHalf key={i} style={{ color: "black" }} />);
    } else {
      // Add an empty star for the remaining slots
      stars.push(<StarBorder key={i} style={{ color: "black" }} />);
    }
  }
  return stars;
};

// Array of movie genres for filtering
export const moviesGenre = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
];

export default moviesData;

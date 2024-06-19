import { useEffect, useState } from "react";
import { Movie } from "../utils/component_Interface"; // Importing Movie interface from component_Interface.ts
import moviesData from "../utils/constant"; // Importing movie data from constant.ts

const useSearchFilter = () => {
  // State variables for managing search text, filtered movies, selected ratings, and selected genres
  const [searchText, setSearchText] = useState<string>(""); // State for holding the search input text
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(moviesData); // State for storing filtered movies, initialized with all movies
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]); // State for storing selected rating filters
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]); // State for storing selected genre filters

  // Handler function for updating search text state based on input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Update search text state with the input value
  };

  // Handler function for updating selected ratings state based on checkbox change
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Parse the rating value from input
    setSelectedRatings(
      (prev) =>
        prev.includes(value) // Check if the value is already in the selected ratings array
          ? prev.filter((r) => r !== value) // If it is, remove it (uncheck)
          : [...prev, value] // If not, add it (check)
    );
  };

  // Handler function for updating selected genres state based on checkbox change
  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Get the genre value from the checkbox
    if (value === "Any genre") {
      setSelectedGenres([]); // Clear all other genres if "Any genre" is selected
    } else {
      setSelectedGenres((prev) =>
        prev.includes(value)
          ? prev.filter((g) => g !== value)
          : [...prev, value]
      );
    }
  };

  // Effect hook to filter movies based on search text, selected ratings, and selected genres
  useEffect(() => {
    const filtered = moviesData.filter((movie) => {
      // Check if the movie title matches the search text (case insensitive)
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      // Check if the movie rating matches any of the selected ratings or if no ratings are selected
      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(movie.rating);
      // Check if the movie genre matches any of the selected genres or if no genres are selected
      const matchesGenre =
        selectedGenres.length === 0 || selectedGenres.includes(movie.category);
      // Return true if all conditions (title, rating, genre) match, otherwise false
      return matchesTitle && matchesRating && matchesGenre;
    });
    // Update the filtered movies state with the newly filtered array
    setFilteredMovies(filtered);
  }, [searchText, selectedRatings, selectedGenres]); // Dependencies for the effect hook

  // Return the state variables, handler functions, and setter functions for external use
  return {
    searchText,
    filteredMovies,
    selectedRatings,
    setSelectedRatings,
    selectedGenres,
    setSelectedGenres,
    handleSearchChange,
    handleRatingChange,
    handleGenreChange,
  };
};

export default useSearchFilter; // Exporting the custom hook for use in other components

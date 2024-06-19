import { useState } from "react";

// Custom hook for managing rating and genre dropdowns
const useRatingGenre = () => {
  // State for rating dropdown anchor element
  const [ratingAnchorEl, setRatingAnchorEl] = useState<null | HTMLElement>(
    null
  );

  // State for genre dropdown anchor element
  const [genreAnchorEl, setGenreAnchorEl] = useState<null | HTMLElement>(null);

  // State to track which dropdown is active (rating, genre, or null)
  const [activeDropdown, setActiveDropdown] = useState<"rating" | "genre" | null>(
    null
  );

  // Function to handle opening the rating dropdown
  const handleOpenRating = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRatingAnchorEl(event.currentTarget); // Set anchor element to the clicked button
    setActiveDropdown("rating"); // Set active dropdown to 'rating'
  };

  // Function to handle closing the rating dropdown
  const handleCloseRating = () => {
    setRatingAnchorEl(null); // Reset rating dropdown anchor element
    setActiveDropdown(null); // Reset active dropdown
  };

  // Function to handle opening the genre dropdown
  const handleOpenGenre = (event: React.MouseEvent<HTMLButtonElement>) => {
    setGenreAnchorEl(event.currentTarget); // Set anchor element to the clicked button
    setActiveDropdown("genre"); // Set active dropdown to 'genre'
  };

  // Function to handle closing the genre dropdown
  const handleCloseGenre = () => {
    setGenreAnchorEl(null); // Reset genre dropdown anchor element
    setActiveDropdown(null); // Reset active dropdown
  };

  // Return state variables and functions to be used by components
  return {
    ratingAnchorEl,
    genreAnchorEl,
    activeDropdown,
    handleOpenRating,
    handleCloseRating,
    handleOpenGenre,
    handleCloseGenre,
  };
};

export default useRatingGenre;

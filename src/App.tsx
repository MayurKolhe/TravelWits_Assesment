import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import useSearchFilter from "./hooks/useSearchFilter";
import useRatingGenre from "./hooks/useRatingGenre";
import SearchBar from "./components/SearchBar";
import RatingFilter from "./components/RatingFilter";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";

// The main App component of the application
const App: React.FC = () => {
  // Extracting various state and handler functions from custom hooks
  const {
    searchText, // The current search text entered by the user
    filteredMovies, // The list of movies filtered based on the search text, rating, and genre
    selectedRatings, // The currently selected ratings
    setSelectedRatings, // Function to set the selected ratings
    selectedGenres, // The currently selected genres
    setSelectedGenres, 
    handleSearchChange, // Handler function for changing the search text
    handleRatingChange, // Handler function for changing the selected ratings
    handleGenreChange, // Handler function for changing the selected genres
  } = useSearchFilter();

  const {
    ratingAnchorEl, // The anchor element for the rating popover
    genreAnchorEl, // The anchor element for the genre popover
    handleOpenRating, // Function to open the rating popover
    handleCloseRating, // Function to close the rating popover
    handleOpenGenre, // Function to open the genre popover
    handleCloseGenre, // Function to close the genre popover
  } = useRatingGenre();

  // State to manage whether the search bar is focused
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" height="100vh" width="100%" paddingTop="22px" paddingLeft="21px">
        <Box justifyContent="center" width="100%">
          {/* Search and filter controls container */}
          <Box display="flex" width="100%" mb={1} gap={4} alignItems="center">
            {/* Search bar component */}
            <SearchBar
              searchText={searchText}
              handleSearchChange={handleSearchChange}
              setIsSearchFocused={setIsSearchFocused}
            />
            {/* Rating filter component */}
            <RatingFilter
              ratingAnchorEl={ratingAnchorEl}
              handleOpenRating={handleOpenRating}
              handleCloseRating={handleCloseRating}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              handleRatingChange={handleRatingChange}
            />
            {/* Genre filter component */}
            <GenreFilter
              genreAnchorEl={genreAnchorEl}
              handleOpenGenre={handleOpenGenre}
              handleCloseGenre={handleCloseGenre}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              handleGenreChange={handleGenreChange}
            />
          </Box>
          {/* Conditionally render the movie list when search is focused or any filter popover is open */}
          {(isSearchFocused || Boolean(ratingAnchorEl) || Boolean(genreAnchorEl)) && (
            <MovieList filteredMovies={filteredMovies} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

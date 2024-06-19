// Interface definition for a Movie object
export interface Movie {
  title: string;
  rating: number;
  category: string;
}

// Define the props interface for the SearchBar component
export interface SearchBarProps {
  searchText: string; // The current search text entered by the user
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes in the search text
  setIsSearchFocused: (isFocused: boolean) => void; // Function to set the focus state of the search bar
}

// Define the props interface for the RatingFilter component
export interface RatingFilterProps {
  ratingAnchorEl: HTMLElement | null; // The anchor element for the rating popover
  handleOpenRating: (event: React.MouseEvent<HTMLButtonElement>) => void; // Function to open the rating popover
  handleCloseRating: () => void; // Function to close the rating popover
  selectedRatings: number[]; // The currently selected ratings
  setSelectedRatings: (ratings: number[]) => void; // Function to set the selected ratings
  handleRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes in the selected ratings
}

// Define the props interface for the GenreFilter component
export interface GenreFilterProps {
  genreAnchorEl: HTMLElement | null; // The anchor element for the genre popover
  handleOpenGenre: (event: React.MouseEvent<HTMLButtonElement>) => void; // Function to open the genre popover
  handleCloseGenre: () => void; // Function to close the genre popover
  selectedGenres: string[]; // The currently selected genres
  setSelectedGenres: (genre: string[]) => void;
  handleGenreChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes in the selected genres
}

export interface MovieListProps {
  filteredMovies: { title: string; rating: number; category: string }[]; // Array of filtered movie objects
}

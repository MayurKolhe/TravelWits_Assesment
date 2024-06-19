import React from "react";
import { TextField } from "@mui/material";
import {SearchBarProps} from "../utils/component_Interface";


const SearchBar: React.FC<SearchBarProps> = ({
  searchText, // The current search text entered by the user
  handleSearchChange, // Function to handle changes in the search text
  setIsSearchFocused, // Function to set the focus state of the search bar
}) => (
  // Material-UI TextField component to accept user input
  <TextField
    label="Enter movie name" // Placeholder text for the search input
    value={searchText} // Bind the search text to the input field
    onChange={handleSearchChange} // Call handleSearchChange on input change
    onFocus={() => setIsSearchFocused(true)} // Set isSearchFocused to true when input is focused
    onBlur={() => setTimeout(() => setIsSearchFocused(false), 100)} // Set isSearchFocused to false shortly after input is blurred
    sx={{
      flexGrow: 0,
      width: "441px",
      height: "48px",
      transition: "flex-grow 0.3s, width 0.3s",
    }}
    InputProps={{ sx: { height: "100%" } }}
  />
);

export default SearchBar;

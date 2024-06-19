import React from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material"; // Import Material-UI components
import { renderStars } from "../utils/constant"; // Import utility function for rendering star ratings

import { MovieListProps } from "../utils/component_Interface";

// The MovieList component
const MovieList: React.FC<MovieListProps> = ({ filteredMovies }) => (
  // Wrapper Box component for styling
  <Box
    style={{
      width: "441px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {/* List component to display the list of filtered movies */}
    <List
      style={{
        backgroundColor: "white",
        width: "100%",
        border: "1px solid black",
        marginTop: "4px",
      }}
    >
      {/* Iterate over the filteredMovies array to create ListItem components for each movie */}
      {filteredMovies.map((movie, index) => (
        <ListItem key={index}>
          {/* Display the movie title and rating */}
          <ListItemText
            primary={movie.title}
            secondary={<>{renderStars(movie.rating)}</>}
          />
          {/* Display the movie category */}
          <ListItemText>{movie.category}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default MovieList;

import React from "react";
import {
  Button,
  Popover,
  List,
  ListItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { moviesGenre } from "../utils/constant";
import { GenreFilterProps } from "../utils/component_Interface";

const GenreFilter: React.FC<GenreFilterProps> = ({
  genreAnchorEl,
  handleOpenGenre,
  handleCloseGenre,
  selectedGenres,
  setSelectedGenres,
  handleGenreChange,
}) => {
  // Function to handle selection of "Any genre"

  return (
    <>
      <Button
        variant="outlined"
        onClick={genreAnchorEl ? handleCloseGenre : handleOpenGenre}
        endIcon={genreAnchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        sx={{
          width: "113px",
          height: "48px",
          color: "black",
          borderColor: "#DADADA",
        }}
      >
        Genre
      </Button>
      <Popover
        open={Boolean(genreAnchorEl)}
        anchorEl={genreAnchorEl}
        onClose={handleCloseGenre}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ mt: 1 }}
      >
        <List>
          <ListItem>
            {/* Checkbox for "Any genre" */}
            <FormControlLabel
              control={
                <Checkbox
                  value=""
                  onChange={() => setSelectedGenres([])}
                  checked={selectedGenres.length === moviesGenre.length}
                />
              }
              label="Any genre"
            />
          </ListItem>
          {/* List items for each genre option */}
          {moviesGenre.map((genre) => (
            <ListItem key={genre}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={genre}
                    onChange={handleGenreChange}
                    checked={selectedGenres.includes(genre)}
                  />
                }
                label={genre}
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default GenreFilter;

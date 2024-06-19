import React from "react";
import {
  Button, // Material-UI Button component
  Popover, // Material-UI Popover component for displaying the filter options
  List, // Material-UI List component for the filter options
  ListItem, // Material-UI ListItem component for each filter option
  FormControlLabel, // Material-UI FormControlLabel component for label and control
  Checkbox, // Material-UI Checkbox component for selecting options
  Box, // Material-UI Box component for layout
} from "@mui/material";
import {
  Star, // Material-UI Star icon
  StarBorder, // Material-UI StarBorder icon
  KeyboardArrowDown, // Material-UI KeyboardArrowDown icon
  KeyboardArrowUp, // Material-UI KeyboardArrowUp icon
} from "@mui/icons-material";

import {RatingFilterProps} from "../utils/component_Interface";


// The RatingFilter component
const RatingFilter: React.FC<RatingFilterProps> = ({
  ratingAnchorEl, // The anchor element for the rating popover
  handleOpenRating, // Function to open the rating popover
  handleCloseRating, // Function to close the rating popover
  selectedRatings, // The currently selected ratings
  setSelectedRatings, // Function to set the selected ratings
  handleRatingChange, // Function to handle changes in the selected ratings
}) => (
  <>
    {/* Button to open the rating popover */}
    <Button
      variant="outlined"
      onClick={ratingAnchorEl ? handleCloseRating : handleOpenRating}
      endIcon={ratingAnchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
      sx={{
        width: "113px",
        height: "48px",
        color: "black",
        borderColor: "#DADADA",
      }}
    >
      Rating
    </Button>
    {/* Popover to display the rating filter options */}
    <Popover
      open={Boolean(ratingAnchorEl)}
      anchorEl={ratingAnchorEl}
      onClose={handleCloseRating}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{ mt: 1 }}
    >
      <List>
        {/* List item for "Any rating" option */}
        <ListItem>
          <FormControlLabel
            control={
              <Checkbox
                value=""
                onChange={() => setSelectedRatings([])}
                checked={selectedRatings.length === 0}
              />
            }
            label="Any rating"
          />
        </ListItem>
        {/* List items for specific rating options */}
        {[...Array(11)].map((_, i) => (
          <ListItem key={i + 1}>
            <FormControlLabel
              control={
                <Checkbox
                  value={i + 1}
                  onChange={handleRatingChange}
                  checked={selectedRatings.includes(i + 1)}
                />
              }
              label={
                <Box display="flex" alignItems="center">
                  {/* Display filled or empty stars based on the rating */}
                  {[...Array(11)].map((_, starIndex) => (
                    <React.Fragment key={starIndex}>
                      {starIndex < i + 1 ? (
                        <Star style={{ color: "black" }} />
                      ) : (
                        <StarBorder />
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Popover>
  </>
);

export default RatingFilter;

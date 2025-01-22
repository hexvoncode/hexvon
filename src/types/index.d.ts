declare module "react-rating" {
    import React from "react";
  
    interface RatingProps {
      initialRating?: number; // Optional initial rating value
      readonly?: boolean;     // If true, disables rating interaction
      emptySymbol?: React.ReactNode | React.ReactNode[]; // Icon(s) for empty rating
      fullSymbol?: React.ReactNode | React.ReactNode[];  // Icon(s) for full rating
    }
  
    const Rating: React.FC<RatingProps>;
  
    export default Rating;
  }
  
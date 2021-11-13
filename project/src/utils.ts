const ONE_STAR_PERCENT = 20;

export const getRating = (rating: number): string => `${ONE_STAR_PERCENT*rating}%`;

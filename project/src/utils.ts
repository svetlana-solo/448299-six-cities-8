const ONE_STAR_PERCENT = 20;

export const getRating = (rating: number): string => `${ONE_STAR_PERCENT*Math.round(rating)}%`;

export const getRandomInteger = (min :number, max :number) : number => Math.floor(Math.random( ) * (max - min + 1)) + min;

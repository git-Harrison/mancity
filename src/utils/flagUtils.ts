export const getFlagImage = (nationality: string): string => {
    return `${process.env.PUBLIC_URL}/images/${nationality}.webp`;
};
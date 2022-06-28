import imgPlaceholder from "../imgPlaceholder.png";
export function getImgMovie( path, width) {
   return  path
    ? `https://image.tmdb.org/t/p/w${width}${path}` 
    : imgPlaceholder;
}
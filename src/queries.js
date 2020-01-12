import qql from "graphql-tag";

export const HOME_PAGE = qql `
    {
        movies(limit:20, rating:5) {
            id
            title
            qenres
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = qql`
query movie($movieId: Int!){
    movie(id: $movieId) {
        
    }
}`;
import React from "react"

import FilmList from "../components/FilmList";

const FilmContainer = ({films, HandleFavouriteToggle}) => {

    return(
        <>
        <main>
            <FilmList films={films} onFavouriteToggle={HandleFavouriteToggle} />
        </main>
        </>
    )

};

export default FilmContainer;
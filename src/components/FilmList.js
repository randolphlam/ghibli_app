import React from "react";
import styled from "styled-components"

const Film = styled.ol`
    display:flex;
	border:2px solid navy;
	cursor:pointer;
	color:navy;
    font-size: 2em;
`
const Button = styled.button`
    background:lightblue;
	cursor:pointer;
	color:navy;
    display:block;
    padding: 14px 28px;
    font-size: 16px;
`


const FilmList = ({films, onFavouriteToggle}) => {

    const filmList = films.map((film) => {

        const handleClick = event => {
            onFavouriteToggle(film.id)
        }

        const favouriteText = film.isInFavourite ? 'Remove Favourite' : 'Add Favourite'

        return (
        
        <Film key={film.id} value={film.id}>
        <img src={film.image} alt="" width="300" height="300"></img> 
                <br></br> <h1>{film.title}</h1>
                <br></br> {film.description}
        
                <Button onClick={handleClick}>{favouriteText}</Button>

                </Film>)

    })

    return(
        <ul>
            {filmList}
        </ul>
    )

}

export default FilmList;
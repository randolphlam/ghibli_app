import React from "react";
import styled from "styled-components";

const FavouriteItem = styled.ol`
    display:flex;
	border:2px solid black;
	cursor:pointer;
	color:black;

`

const Button = styled.button`
	cursor:pointer;
	color:black;
    display:block;
    padding: 14px 28px;
    font-size: 16px;
    background:red;
`

const FavouriteHead = styled.h2`
background-color: #white;
padding: 0.8em;
`

const CheckoutButton = styled.button`
	cursor:pointer;
    background:red;
	color:black;
    display:block;
    padding: 14px 28px;
    font-size: 16px;
`

const FavouriteDetail = ({films, onFavouriteToggle, checkoutFavourite}) =>{

    const  filmsInFavourite = films.filter(film => film.isInFavourite);

        const handleSubmit = (event) => {
            event.preventDefault();
        } 


    return(  
        <>
        
        <FavouriteHead> My Favourites </FavouriteHead>
        <ul>
            {filmsInFavourite.map(film => {

                return(
                    <FavouriteItem key={film.id}>
                        
                            
                            <img src={film.image} alt="" width="300" height="300"></img>
                            <br></br>
                            <h1>{film.title} </h1>
                            <br></br> 
                            <p>{film.description} </p>
                            

                            <br></br>
                        <Button onClick={() => onFavouriteToggle(film.id)}>Delete</Button>
                    </FavouriteItem>
                )
            })}
        </ul>

        
        <form onSubmit={handleSubmit}>
         
        </form>
        <CheckoutButton onClick={checkoutFavourite}>Clear All Favourites List</CheckoutButton>


        </>

    )

}

export default FavouriteDetail;
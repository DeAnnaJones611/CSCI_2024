import { createContext, useState } from "react";

//This is the functions that is used thoughtout the app 
export const  BookmarksContext = createContext({
    //The varibles used to create the list needed for the bookmarked screen
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

//The provider that is used for the navigation
function BookmarksContextProvider({children}){
    //The useState makes the list of all the ids when marked
    const [bookmarksIds, setBookmarkIds] = useState([]);

    //This function adds the id on the book marked list
    function addFavoriteBookmark(id){
        setBookmarkIds((currentBookmarksIds) => {
            return [...currentBookmarksIds, id];
        });
    }

    //This function removes the id on the book marked list 
    function removeFavoriteBookmark(id){
        setBookmarkIds((currentBookmarksIds) => {
            return currentBookmarksIds.filter((bookId) => bookId != id);
        });
    }

    //This is all the vaibles in one varbile
    const value = {
        ids : bookmarksIds,
        addFavorite : addFavoriteBookmark,
        removeFavorite: removeFavoriteBookmark, 
    };


    //Returns all the value using Book marks Context
    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;
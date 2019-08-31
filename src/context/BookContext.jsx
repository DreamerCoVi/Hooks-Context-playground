import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        {title: 'Name of the wind', author: 'Patrick Rothfuss', id: uuid()},
        {title: 'The Final Empire', author: 'Brandon sandderson', id: uuid()},
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };
    const rmBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (    
        <BookContext.Provider value={{books, addBook, rmBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
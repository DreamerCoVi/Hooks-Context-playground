import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({book}) => {

    const {rmBook} = useContext(BookContext);


    return ( 
        <li onClick={() => rmBook(book.id)}> 
            <div className='title'>'{book.title}'</div>
            <div className='author'> by {book.author}</div>
        </li>
     );
}
 
export default BookDetails;


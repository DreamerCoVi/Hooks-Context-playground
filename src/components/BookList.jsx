import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);

    return !books.length
        ? (
            <div className='empty'>
                Oh... For now, i`ve read all what i can :)
            </div>
        )
        : (
            <div className = "book-list">
                <ul>
                    {books.map(book => {
                        return (
                            <BookDetails book={book} key={book.id} />
                        )
                    })}
                </ul>
            </div>
        )
}

export default BookList;
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('FakeData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

        
    },[])
    return (
        <div>
            <h2 className="text-center text-5xl mt-10">Books</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"> 
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData()
    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt)
    console.log(book);


    return (
        <div className=" card card-side bg-base-100 shadow-xl mt-4">
            <figure><img src={book.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{book.bookName}</h2>
                <h3 className="text-bold">  By : {book.author}</h3>
                <hr />
                <h1>{book.category}</h1>
                <hr />
                <div className="flex gap-3">
                    <h1 className="font-bold">Review : </h1>
                    <h1 className="">{book.review}</h1>
                </div>
                <div className="flex gap-5 items-center">
                    <h1 className="font-bold">Tag :</h1>
                    <button className="gap-5 btn text-green-500 font-bold rounded-full">#{book.tags.slice(0, 1)}</button>
                    <button className="gap-5 btn text-green-500 font-bold rounded-full">#{book.tags.slice(1, 2)}</button>
                </div>
                <hr />
                <div className="flex mr-[900px]">
                    <p>Number of pages :</p>
                    <h1 className="font-bold">{book.totalPages}</h1>
                </div>
                <div className="flex mr-[800px]">
                    <p>publisher :</p>
                    <h1 className="font-bold">{book.publisher}</h1>
                </div>
                <div className="flex mr-[900px]">
                    <p>Year Of Publishing :</p>
                    <h1 className="font-bold">{book.yearOfPublishing}</h1>
                </div>
                <div className="flex mr-[900px]">
                    <p>Rating :</p>
                    <h1 className="font-bold">{book.rating}</h1>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-secondary">Read</button>
                    <button className="btn btn-info">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
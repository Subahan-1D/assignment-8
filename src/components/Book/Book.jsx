import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookName, author, rating, tags, category, } = book;

    return (
        <div className="max-w-xs p-6 w-96 rounded-md  border">
            <figure>
                <img src={image} alt="book" className="object-cover object-center  ml-4 rounded-md h-72 bg-[#f3f3f3] p-6 mt-3"/>
            </figure>
            <div className="mt-6 mb-2">
                <div className=" flex gap-5 ">
                    <button className="gap-5 btn text-green-500 font-bold">{tags.slice(0, 1)}</button>
                    <button className="gap-5 btn text-green-500 font-bold">{tags.slice(1, 2)}</button>
                </div>
                <h2 className="text-xl font-bold mt-2 tracking-wide">{bookName}</h2>
            </div>
            <p className="dark:text-gray-800">By : {author}</p>
            <div className="flex  justify-between mt-2">
                <div>
                    <h6>{category}</h6>
                </div>
                <div>
                    <h6>{rating}</h6>
                </div>
            </div>
        </div>
    );
};

export default Book;
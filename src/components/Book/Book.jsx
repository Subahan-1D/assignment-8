import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookName, author, rating, tags, category,bookId } = book;

    return (
        <Link to={`/book/${bookId}`} className="max-w-xs  w-96 p-6 rounded-md  border">
            <figure>
                <img src={image} alt="book" className="object-cover object-center  ml-4 rounded-md h-72 bg-[#f3f3f3] p-6 mt-3" />
            </figure>
            <div className="mt-6 mb-2">
                <div className=" flex gap-5 ">
                    <button className="gap-5 btn text-green-500 font-bold rounded-full">{tags.slice(0, 1)}</button>
                    <button className="gap-5 btn text-green-500 font-bold rounded-full">{tags.slice(1, 2)}</button>
                </div>
                <h2 className="text-xl font-bold mt-2 tracking-wide">{bookName}</h2>
            </div>
            <div className="flex gap-2 mb-3 " >
                <p> By : </p>
                <h1 className="font-semibold">{author}</h1>
            </div>
            
            <hr />
            <div className=" ml-5 flex   justify-between mt-2">
                <div>
                    <h6>{category}</h6>
                </div>
                <div>
                    <div className="flex items-center gap-1">

                        <h6>{rating}</h6>
                        <h6><CiStar className="text-xl"></CiStar></h6>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
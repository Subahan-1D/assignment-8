import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero  bg-[#f3f3f3] mt-5 rounded-lg  ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-[80px]">
                <img  src="https://res.cloudinary.com/dospsrwzj/image/upload/v1711575978/vae8irtigoj2bytzhlu8.png" className="max-w-sm  " />
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold ">Books to freshen <br /> up your bookshelf</h1>
                    <Link to='/listed'><button className=" btn bg-[#62d150] hover:bg-[#62d150]  mt-10 text-white font-bold">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
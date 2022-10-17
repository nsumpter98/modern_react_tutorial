import {useState, useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {


    const [blogs, setBlogs] = useState(null);



    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }


    useEffect(() => {
        fetch("http://localhost:8000/blogs").then(res => {
            return res.json();
        }).then(data => {
            setBlogs(data);
        });

    }, []);

    return (
        <div className="home">
            {/*because null evaluates to false it doesn't execute the right side*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;
import {useState, useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {




    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}

            {/*because null evaluates to false it doesn't execute the right side*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;
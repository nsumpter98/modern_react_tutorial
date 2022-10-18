import useFetch from "./useFetch";
import {useState} from "react";

import { IonButton } from '@ionic/react';


const Create = () => {
    //const {body, author, isPending } = useFetch('http://localhost:8000/blogs');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <IonButton color={'primary'} fill="clear">Add Blog</IonButton>}
                {isPending && <IonButton disabled>Adding blog...</IonButton>}
                {/*{isPending && <button disabled>Adding Blog...</button>}*/}
            </form>
        </div>
    );
}

export default Create;
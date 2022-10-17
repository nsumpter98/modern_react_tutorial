import useFetch from "./useFetch";

const Create = () => {
    const { title, body, author, isPending } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form>
            <label>Blog title:</label>
            <input type="text" required />
            <label>Blog body:</label>
            <textarea required></textarea>
            <label>Blog author:</label>
            <select>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}
        </form>
        </div>
    );
}

export default Create;
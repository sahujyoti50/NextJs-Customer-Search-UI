import { useEffect, useState } from "react";

// posts will be populated at build time by getStaticProps()
function Home() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json();
        setData(posts);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <ul>
            {data.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    )
}

export default Home;
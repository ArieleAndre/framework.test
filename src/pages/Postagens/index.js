import React,{ useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import api from '../../services/api';

const Postagens = () => {
    const [posts, setPosts] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [cachePosts, setCachePosts] = useState([]);

    useEffect(async () => {
    const response = await api.get('/posts');
    setPosts(response.data);
    setCachePosts(response.data);
    }, []);
   
    function handleSubmit(e) {
        e.preventDefault();

        if (textInput === 'todos') {
            setPosts(cachePosts);
            return;
        }
        
        const filtereduserId = cachePosts.filter(t => t.userId == textInput);

        setPosts(filtereduserId);
    }

   



    return (
      
        <>
        <Menu/>
        <h1>Posts</h1>

        <form onSubmit={handleSubmit}>
        <input name="filter" onChange={(e) => setTextInput(e.target.value)}/>
         <button type="submit">Filtrar</button>
     </form>
     
        <table border='1'>
        <tr>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        {posts.map(post => (
            <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        ))}
        </table>
        </>
    );


}
export default Postagens; 
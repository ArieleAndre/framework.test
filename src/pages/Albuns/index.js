import React,{ useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import api from '../../services/api';

const Albuns = () => {
    const [albuns, setAlbuns] = useState([]);
    
    useEffect(async () => {
    const response = await api.get('/photos');
    setAlbuns(response.data);
    }, []);

    return(
        <>
        <Menu/>
        <h1>Album</h1>
        <table border='1'>
        <tr>
            <th>AlbumId</th>
            <th>Title</th>
            <th>url</th>
        </tr>
        {albuns.map(albuns => (
            <tr key={albuns.albumId}>
                <td>{albuns.id}</td>
                <td>{albuns.title}</td>
                <td><img src={albuns.thumbnailUrl} alt={albuns.title} /></td>
            </tr>
        ))}
        </table>
        </>

    );
}

export default Albuns;
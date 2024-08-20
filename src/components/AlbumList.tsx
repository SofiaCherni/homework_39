import { Link } from "react-router-dom";
import './AlbumList.css';
import { useContext } from "react";
import {AlbumsContext} from '../context/AlbumsProvider'

function AlbumList() {
    const albums = useContext(AlbumsContext);

    return (
    <ul className="album-menu">
        {albums?.map(album => (
            <li className="box" key={album.id}>
                <div>UserId: {album.userId}</div>
                <div>Id: {album.id}</div>
                <div>Title: <Link to={`/albums/${album.id}/photos`}>{album.title}</Link></div>
            </li>
        ))}
    </ul>
    );
}

export default AlbumList;

import { useSelector } from "react-redux";
import { albumSelector } from "../../redux/reducers/albumReducer";
import AlbumListItem from '../AlbumListItem/AlbumListItem'
import styles from './AlbumList.module.css';
function AlbumList(){
    const {albumList} = useSelector(albumSelector);
    // console.log('From inside AlbumList', albumList)
    return (
        <div className={styles.albumListContainer}>
            <h2>Album List</h2>
            <ul>
                {albumList.map((album, index) => <AlbumListItem key={index} album={album}/>)}
            </ul>
        </div>
    )
}

export default AlbumList;
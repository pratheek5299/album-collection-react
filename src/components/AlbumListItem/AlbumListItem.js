import { useDispatch } from 'react-redux'
import styles from './AlbumListItem.module.css'
import { albumActions } from '../../redux/reducers/albumReducer';
function AlbumListItem({album}){
    const dispatch = useDispatch();
    const deleteItem = () =>{
        console.log('https://jsonplaceholder.typicode.com/albums/' + album.id)
        fetch('https://jsonplaceholder.typicode.com/albums/' + album.id, {
            method: 'DELETE',
        }).then(response =>response.json())
        .then(json => dispatch(albumActions.delete(album.id)))
        .catch((e) => dispatch(albumActions.error('DELETE')))
    }
    return (
        <li className={styles.albumListItemContainer}>
            <h4>Album Card {album.id}</h4>
            <p><b>Title: </b> {album.title}</p>
            <button onClick={deleteItem}>Delete</button>
        </li>
    )
}
export default AlbumListItem;
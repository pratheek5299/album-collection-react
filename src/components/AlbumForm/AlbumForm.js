import { useState } from 'react';
import styles from './AlbumForm.module.css'
import { useDispatch } from 'react-redux';
import { albumActions } from '../../redux/reducers/albumReducer';
function AlbumForm() {
    const [method, setMethod] = useState('POST')
    const [albumName, setAlbumName] = useState('');
    const [albumId, setAlbumId] = useState('');
    const dispatch = useDispatch();
    const apiCall =  () => {
        if (method === 'POST'){
            fetch('https://jsonplaceholder.typicode.com/albums', {
                method: 'POST',
                body: JSON.stringify({
                    title: albumName,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => dispatch(albumActions.post(json)))
                .catch((e) => dispatch(albumActions.error('POST')));
        }else if(method === 'PUT'){
            fetch('https://jsonplaceholder.typicode.com/albums/' + albumId, {
                method: 'PUT',
                body: JSON.stringify({
                    id: albumId,
                    title: albumName,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => dispatch(albumActions.put(json)))
                .catch((e) => dispatch(albumActions.error('PUT')));
        }
    }

    // console.log('Method: ', method)
    const handleSubmit = (e) => {
        e.preventDefault();
        apiCall();
        setAlbumId('');
        setAlbumName('')
    }
    return (
        <div className={styles.albumFormContainer}>
            <h2>Album Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                name='albumName'
                placeholder='Album Title..' 
                value={albumName} 
                onChange={(e) => setAlbumName(e.target.value)}/>
                
                {method === 'PUT'? <input 
                placeholder='Album Id..'
                name='albumCard'
                value={albumId}
                onChange={(e) => setAlbumId(e.target.value)}
                />: null}

                <select name='method' value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option value='POST'>POST</option>
                    <option value="PUT">PUT</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AlbumForm;
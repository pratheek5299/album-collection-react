import styles from './Display.module.css'
import AlbumForm from '../AlbumForm/AlbumForm';
import AlbumList from '../AlbumList/AlbumList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { albumActions } from '../../redux/reducers/albumReducer';
function Display(){
    const dispatch = useDispatch();
    useEffect(()=> {
        async function getInitailList(){
            let response = await fetch('https://jsonplaceholder.typicode.com/albums');
            let data = await response.json();
            // console.log('Fetched Data: ', data)
            dispatch(albumActions.setInitalItems(data))
        } 
        getInitailList();
    },[])
    return (
        <div className={styles.displayContianer}>
            <AlbumForm/>
            <AlbumList/>
        </div>
    )
}
export default Display;
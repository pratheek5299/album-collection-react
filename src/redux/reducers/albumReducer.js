import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    albumList: []
}

const albumSlice = createSlice({
    name: 'album',
    initialState: initialState,
    reducers: {
        //fetch the initial list items
        setInitalItems: (state, action) => {
            console.log('GET ACHIEVED', action.payload)
            state.albumList = [...action.payload]
        },
        // after post request update the albumList state
        post: (state, action) => {
            console.log('POST ACHIEVED', action.payload)
            state.albumList = [...state.albumList,action.payload]
        },
        // after a put request and update the albumList
        put: (state, action) => {
            console.log('PUT ACHIEVED', action.payload);
            state.albumList.map((album) => {
                if(album.id === action.payload.id){
                    album.title = action.payload.title
                }
                return album
            })
        },
        // after the delete request remove the item from the albumList in state
        delete: (state, action) => {
            console.log('DELETE ACHIEVED\n Album deleted', action.payload);
            let arr = state.albumList.filter((album) => album.id !== action.payload)
            state.albumList = [...arr]
        },
        error: (state, action) => {
            console.log('Error in the ',action.payload, ' request');
        }
    }
});

// album reducer
export const albumReducer = albumSlice.reducer;

// album actions 
export const albumActions = albumSlice.actions;

//album selector
export const albumSelector = (state) => state.albumReducer;
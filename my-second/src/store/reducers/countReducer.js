import {createSlice} from "@reduxjs/toolkit"

const initial ={
    count:0
}


export const countSlice = createSlice({
    name:"count",
    // initialState,
    reducers:{
        increment(state,action) {
            state.count += action.payload

        },
        decrement(state,action) {
            state.count -=action.payload
        },
    },

})

export default countSlice.reducer
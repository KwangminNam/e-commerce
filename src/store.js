import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name:"user",
  initialState:"park"
})

const stock = createSlice({
  name:"stock",
  initialState:[1,2,3,4,5]
})

const mainStock = createSlice({
  name:"mainStock",
  initialState:[
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock:stock.reducer,
    main: mainStock.reducer
  }
}) 
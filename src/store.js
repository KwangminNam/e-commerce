import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './assets/data/data';

const user = createSlice({
  name:"user",
  initialState:{name:"kwangmin",age:30},
  reducers: {
    changeName(state){
      state.name= 'kwangmin'
    },
    changeAge(state , num){
      state.age += num.payload;
    }
  }
})

export const {changeName, changeAge} = user.actions;

const stock = createSlice({
  name:"stock",
  initialState:[1,2,3,4,5]
})

const mainStock = createSlice({
  name:"mainStock",
  initialState:[
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1},
    {id : 1, name : 'Grey Yordan', count : 1}
  ],
  reducers:{
    increase(state, a ){
      const num = state.findIndex((item)=>{return item.id == a.payload})
      state[num].count++;
    },
    createProduct(state,action){
      state.push(action.payload);
    }
  }
})

export const { increase  , createProduct } = mainStock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock:stock.reducer,
    main: mainStock.reducer
  }
}) 

import { products } from "../db";


export const DataReducer = (state, {type, payload})=>{

    switch(type){

        case "changeCategory":
            console.log("payload", payload);
            
                let newValue = state.products.find((book)=>book.title === payload[0])
                newValue.categoryName = payload[1];
                console.log("newValue", newValue);
            return{
                ...state, products:[...products.filter((book)=>book.title !== payload[0]), newValue ]
            }

        default:
            return state;
    }
}
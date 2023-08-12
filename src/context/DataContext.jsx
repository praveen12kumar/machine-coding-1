import { createContext, useReducer } from "react";
import { products } from "../db";
import { DataReducer } from "../reducer/DataReducer";
export const DataContext = createContext();


export const DataProvider = ({children})=>{
    
    const initialState = {
        products,
        currentlyReading: [],
        wantToRead: [],
        read:[],
        search:"",
    }


    const [state, dispatch] = useReducer(DataReducer, initialState);
    
    
    return(
        <DataContext.Provider value={{
            DataDispatch:dispatch,
            products:state.products,
            currentlyReading: state.currentlyReading,
            wantToRead: state.wantToRead,
            read: state.read,
            search: state.search,
        }}>
            {children}
        </DataContext.Provider>
    )
}
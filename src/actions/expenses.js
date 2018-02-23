import {createStore,combineReducers} from "redux"
import uuid from "uuid";

//multiple smaller functions
export const addExpense = (
                    {description='',
                    notes='',
                    amount=0,
                    createdAt = 0
                    } = {})=>{
                        console.log(description)
                       return {
    type:"ADD_EXPENSE",
    expense: {
        id: uuid(),description,notes,amount,createdAt
    }



}};



export const editExpense = (id,updates)=> ({

    type: 'EDIT_EXPENSE',
    id:id,
    updates

})

export const  removeExpense = ( {id}= {} )=>({
            type:"REMOVE_EXPENSE",
            id
                    
            });


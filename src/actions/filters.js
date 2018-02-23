import {createStore,combineReducers} from "redux"
import uuid from "uuid";



export const setTextFilter = (text="") => ({
    type:"SET_TEXT_FILTER",
    text
})

export const sortByAmount = () => ({
    type:"SORT_BY",
    sortAtrribute: "amount"
})

export const sortByDate = () => ({
    type:"SORT_BY",
    sortAtrribute: "date"
})


export const setStartDate = (startDate=undefined)=>({

    type:"SET_START_DATE",
    startDate

})

export const setEndDate = (endDate=undefined)=>({

    type:"SET_END_DATE",
    endDate

})

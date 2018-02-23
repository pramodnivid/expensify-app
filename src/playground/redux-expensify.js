import {createStore,combineReducers} from "redux"

import {addExpense,editExpense,removeExpense} from "../actions/expenses.js"
import {setTextFilter,sortByAmount,sortByDate,setEndDate,setStartDate} from "../actions/filters.js"
import expenseReducer from "../reducers/expenses.js";

import filtersReducer from "../reducers/filters.js";
import getVisibleExpenses from "../selectors/expenses.js"
//import store from "../store/configureStore.js"
import uuid from "uuid";



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
    //console.log(store.getState())

});

 const expenseOne = store.dispatch(addExpense({description:"rent",createdAt:130,amount:20}))
 const expenseTwo = store.dispatch(addExpense({description:"rent",createdAt:127,amount:30}))

// store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:1000}))

const filterByRent = store.dispatch(setTextFilter("rent"))

store.dispatch(sortByAmount());
store.dispatch(sortByDate());


store.dispatch(setStartDate(125))
store.dispatch(setEndDate(1000))

const demoState = {
    expenses:[{
        id:'asd',
        description: "january rent",
        note: "ttjsof;sldjfl;sm ;samdf;",
        amount: 54500,
        createdAt: 0

    }],
    filters:{
        text:'rent',
        sortBy:'date',//date or amount
        startDate: undefined,
        endDate: undefined
    }

};



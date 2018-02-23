

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom"
import { Provider } from "react-redux"

import AppRouter from "./routers/AppRouter.js"
import configureStore from './store/configureStore'

import {addExpense,removeExpense,editExpense} from "./actions/expenses.js"
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from "./actions/filters.js"
import getVisibleExpenses from "./selectors/expenses.js"
import "react-dates/lib/css/_datepicker.css"

import "./styles/styles.scss"
import "normalize.css/normalize.css";


const store = configureStore();

store.subscribe(() => 
{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)

    //console.log(store.getState())

});



const expenseOne = store.dispatch(addExpense({description:"rent",createdAt:130,amount:20}))
const expenseTwo = store.dispatch(addExpense({description:"water bill",createdAt:127,amount:30}))
store.dispatch(addExpense({description:"Gas",createdAt:140,amount:120}))

// store.dispatch(addExpense({description:"rent",createdAt:127,amount:30}))
// store.dispatch(addExpense({description:"rent",createdAt:127,amount:30}))
// store.dispatch(addExpense({description:"rent",createdAt:127,amount:30}))

//store.dispatch(removeExpense({id:expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id,{amount:1000}))

// const filterByRent = store.dispatch(setTextFilter("rent"))

store.dispatch(sortByAmount());
store.dispatch(sortByDate());





const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
    
)

var appRoot = document.getElementById("app");
ReactDOM.render(jsx,appRoot);



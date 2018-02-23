import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom"
import { Provider } from "react-redux"

import {connect} from 'react-redux'
import expenses from "../reducers/expenses";
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

export const ExpenseList = (props) =>(
    <div>
        <h1> List </h1>
        {console.log(props.expenses)}
        {props.expenses.length === 0 ? (<p> No expenses </p>) :
            props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense}/> )}

    </div>
)


const mapStateProps  = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters),
        filters: state.filters

    };
}


export default connect(mapStateProps)(ExpenseList);



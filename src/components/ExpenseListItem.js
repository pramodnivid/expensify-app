import React from "react"
import ReactDOM from "react-dom"
import {removeExpense} from "../actions/expenses"
import {connect} from 'react-redux'
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom"

export const ExpenseListItem = (props) =>(
    <div> 
        <h3>{props.description}</h3>
        <p>amount:{props.amount}, created on: {props.createdAt}</p> 
        <button onClick = { (e)=>{
            props.dispatch(removeExpense(props))
        }} > remove </button>
        <NavLink to={"/edit/"+props.id} activeClassName="is-active" exact={true}> Edit </NavLink>


    </div>
)

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters
//     }
// }
export default connect()(ExpenseListItem);

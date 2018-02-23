import React from "react"
import ReactDOM from "react-dom"
import ExpenseForm from "./ExpenseForm"
import {addExpense} from "../actions/expenses"
import {connect} from "react-redux"
export class AddExpensePage extends React.Component{

    onSubmit = (expense)=>{
        console.log(expense)
        this.props.addExpense(expense);
        this.props.history.push('/');

    }

render(){
    return(
        <div>
        <h3>Add Expense</h3>
            <ExpenseForm onSubmit = {this.onSubmit}/>
        </div>
    )
}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addExpense: (expense)=>{
            dispatch(addExpense(expense))
        }
    };
}

export default connect(undefined,mapDispatchToProps)(AddExpensePage);

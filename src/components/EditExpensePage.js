import React from "react"
import ReactDOM from "react-dom"
import {editExpense,removeExpense} from "../actions/expenses"
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"

export class EditExpensePage extends React.Component{

    onSubmit = (expense)=>{
        //this.props.dispatch(editExpense(props.expense.id,expense))
        this.props.editExpense(this.props.expense.id,expense);

        console.log("upd",expense)
        this.props.history.push('/')

    }
    onClick = () => {
        
            this.props.removeExpense( {id: this.props.expense.id})
            this.props.history.push('/')
        

    }



render(){
    return (<div>
        <ExpenseForm expense={this.props.expense} onSubmit = {this.onSubmit}/>

        <button onClick = {this.onClick} > remove </button>

        </div>)

    }

}
const mapToStateProps = (state,props) =>{
    return {
        expense: state.expenses.find((expense) => {
            return (expense.id == props.match.params.id)
        }) 
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        editExpense: (id,updates)=>{
            dispatch(editExpense(id,updates))
        },
        removeExpense: (id)=>{
            dispatch(removeExpense(id))
        }

    };
}


export default connect(mapToStateProps,mapDispatchToProps)(EditExpensePage);
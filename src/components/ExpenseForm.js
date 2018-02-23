import React from "react"
import {addExpense} from "../actions/expenses"
import {connect} from "react-redux"
import moment from "moment";
import {SingleDatePicker} from "react-dates"
const now = moment();
console.log(now.format('DD/MMM/YYYY'))



export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description : props.expense ? props.expense.description: '',
            amount:props.expense?(props.expense.amount/100).toString():'',
            note : props.note ? props.expense.note:'',
            createdAt: props.expense ? moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            error:undefined
    
        }
    
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}))
    }
    addexp = (e) => {
        this.props.dispatch(addExpense({description:this.description}))
    }


    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState(()=>({createdAt}))


    }

    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}))


    }

    onSubmit = (e)=>{
        e.preventDefault()
        if(!this.state.description | !this.state.amount ){
            this.setState(()=>({error:"Please enter amount and description"}))

        }else{
            this.setState(()=>({error:undefined}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) *100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })

            console.log("submit")
        }
    }

    render(){
        
        return (
        <div>
        <form onSubmit = {this.onSubmit}>
            <input type="text" name="description" 
                    value={this.state.description} 
                    onChange = {this.onDescriptionChange}
                    placeholder="Description" autoFocus>
            </input>
            
            <input type="text" name="amount" 
                    value={this.state.amount} 
                    onChange = {this.onAmountChange}
                    placeholder="Amount">

            </input>
            <SingleDatePicker
                date={this.state.createdAt}
                onDateChange = {this.onDateChange}
                onFocusChange = {this.onFocusChange} 
                focused = {this.state.calendarFocused}
                numberOfMonths = {1}
                isOutsideRange = {()=> false}        
            />
            <textarea 
            value={this.state.note} 
            onChange = {this.onNoteChange}

            placeholder="Add a note your expense"> 
            </textarea>
            <button>Add</button>
        </form>
        {!!this.state.error && <p> {this.state.error} </p>}
        </div>)
    }
}



//export default connect()(ExpenseForm)
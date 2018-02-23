

import React from "react"
import {shallow} from "enzyme"
import moment from "moment"
import {EditExpensePage} from "../../components/EditExpensePage"
import expenses from "../fixtures/expenses"

let editExpense,removeExpense,history,wrapper;
beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} expense = {expenses[0]} history={history} />)

})

test("should render edit page correctly ",()=>{
    expect(wrapper).toMatchSnapshot();
})

test("should handle edit onSubmit",()=>{
     wrapper.find('ExpenseForm').prop('onSubmit')({amount:123});
     expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,{amount:123});

 })

 test("should handle remove onSubmit",()=>{
    wrapper.find('button').prop('onClick')('1');
    expect(history.push).toHaveBeenLastCalledWith('/');
   expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[0].id});

})

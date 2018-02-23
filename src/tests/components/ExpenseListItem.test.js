import React from "react"
import {shallow} from "enzyme"
import {ExpenseListItem} from "../../components/ExpenseListItem"
import expenses from "../fixtures/expenses"



test("should render expense list",()=>{
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();

})

// test("should render with empty message",()=>{
//     const wrapper = shallow(<ExpenseList expenses={[]}/>)
//     expect(wrapper).toMatchSnapshot();

// })

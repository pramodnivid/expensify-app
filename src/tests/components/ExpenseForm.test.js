import React from "react"
import {shallow} from "enzyme"
import moment from "moment"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"
test("should render expense form",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})


test("should render expense form with expense data",()=>{
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid from submission",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})

test("should set description on input change",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    const value = "rent"
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);


})

test("should set note on input change",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    const value = "rent"
    wrapper.find('textarea').at(0).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);


})

test("should set amount on valid input",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    const value = "23.50"
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);


})

test("should set amount on not valid input",()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
    const value = "eeee"
    wrapper.find('input').at(1).simulate('change',{
        target : {value}
    });
    expect(wrapper.state('amount')).toBe("");


})

test("should call onsubmit propss for valid from submission",()=>{

    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })

    //onSubmitSpy('Andrew','philadelphia');
    expect(wrapper.state('error')).toBe(undefined);

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        createdAt:expenses[0].createdAt,
        note:expenses[0].note
    })
    


})


test("should set new date on date change",()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now);


})

test("should set calendar focus on change",()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toBe(true);


})

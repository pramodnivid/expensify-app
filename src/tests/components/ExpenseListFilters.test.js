import React from "react"
import {shallow} from "enzyme"
import {ExpenseListFilters} from "../../components/ExpenseListFilters"
import expenses from "../fixtures/expenses"
import {filters,altFilters} from "../fixtures/filters.js"
import moment from "moment"
let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=> {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper= shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setEndDate = {setEndDate}
            setStartDate = {setStartDate}
        />

    )
})


test("should render ExpenseListFilters correctly",()=>{
    expect(wrapper).toMatchSnapshot();

})
test("should render ExpenseListFilters with alt data correctly",()=>{
    wrapper.setProps({
        filters:altFilters}
    )
    expect(wrapper).toMatchSnapshot();

})
test("should handle text change",()=>{
    const value = "rent"

    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    });
   // expect(filters.setTextFilter).toBe(value);
   expect(setTextFilter).toHaveBeenCalledWith(value);


})

test("should sort by date",()=>{
    const value = "date"

    wrapper.find('select').at(0).simulate('change',{
        target : {value}
    });
   // expect(filters.setTextFilter).toBe(value);
   expect(sortByDate).toHaveBeenLastCalledWith();


})

test("should sort by amount",()=>{
    const value = "amount"

    wrapper.find('select').at(0).simulate('change',{
        target : {value}
    });
   // expect(filters.setTextFilter).toBe(value);
   expect(sortByAmount).toHaveBeenCalledWith();


})

test("should handle date changes",()=>{
    const stDate = moment(0)
    const eDate = moment(0).add(2,"days")

    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate : stDate,
        endDate: eDate
    });
   // expect(filters.setTextFilter).toBe(value);
   expect(setStartDate).toHaveBeenCalledWith(stDate);
   expect(setEndDate).toHaveBeenCalledWith(eDate);


})

test("should handle focus changes",()=>{
    const now = moment(0).add(2,"days")

    wrapper.find('DateRangePicker').prop('onFocusChange')("startDate");
   // expect(filters.setTextFilter).toBe(value);
   console.log(wrapper.state.calenderFocused)
   expect(wrapper.state('calenderFocused')).toEqual("startDate");


})

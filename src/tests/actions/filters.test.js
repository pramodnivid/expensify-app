import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from "../../actions/filters"
import moment from "moment"

test ("set text filter",()=>{
    const setfilter = setTextFilter("rent")
    expect(setfilter).toEqual({type:"SET_TEXT_FILTER",
    text:"rent"})

})


test ("set start date",()=>{
    const setfilter = setStartDate(moment(0))
    expect(setfilter).toEqual(
        {type:"SET_START_DATE",
    startDate:moment(0)})

})


test ("set end date",()=>{
    const setfilter = setEndDate(moment(0))
    expect(setfilter).toEqual(
        {type:"SET_END_DATE",
    endDate:moment(0)})

})


test ("sort by amount",()=>{
    const setfilter = sortByAmount()
    expect(setfilter).toEqual(
        {type:"SORT_BY",
        sortAtrribute: "amount"}
)})


test ("sort by date",()=>{
    const setfilter = sortByDate()
    expect(setfilter).toEqual(
        {type:"SORT_BY",
        sortAtrribute: "date"}
)})
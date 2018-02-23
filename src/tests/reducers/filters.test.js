import filterReducer from "../../reducers/filters"
import moment from "moment"
test("should setup default filter value", ()=>{
    const state = filterReducer(undefined,{type: '@@INT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sortBy to amount",()=>{
    const state = filterReducer(undefined,{type: 'SORT_BY',sortAtrribute: "amount"});
    expect(state.sortBy).toEqual('amount')
})

test("should set sortBy to date",()=>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState,{type: 'SORT_BY',sortAtrribute: "date"});
    expect(state.sortBy).toEqual('date')
})



test("should set start date",()=>{
    const currentState = {
        text:'',
        startDate: 0,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState,{type: "SET_START_DATE",startDate:moment(100)});
    expect(state.startDate).toEqual(moment(100))
})

test("should set end date",()=>{
    const currentState = {
        text:'',
        startDate: 0,
        endDate: 0,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState,{type: "SET_END_DATE",endDate:moment(100)});
    expect(state.endDate).toEqual(moment(100))
})

test("should set text filter",()=>{
    const currentState = {
        text:'',
        startDate: 0,
        endDate: 0,
        sortBy: 'amount'
    }
    const state = filterReducer(undefined,{type: "SET_TEXT_FILTER",text:"rent"});
    expect(state.text).toEqual("rent")
})

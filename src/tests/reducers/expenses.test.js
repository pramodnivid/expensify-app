import expenseReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses";

test("shoudld set default state",()=>{
    const state = expenseReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([])  
})

test('should remove expense id',()=>{
    const action= {
        type: 'REMOVE_EXPENSE',
        id : expenses[1].id
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});


test('should NOT remove expense id IF NOT FOUND',()=>{
    const action= {
        type: 'REMOVE_EXPENSE',
        id : '-1'
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses)
});


test("shoud add an expense",()=>{
    const action = {
        type:"ADD_EXPENSE",
        expense:{
            id:4,
            description:"tour",
            note:'',
            amount:100
        }
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense])
})

test("shoud edit an expense",()=>{
    const action = {
        type:"EDIT_EXPENSE",
        id:"3",
        updates:{
            
            note:'',
            amount:1000
        }
    }
    const state = expenseReducer(expenses,action);
    expect(state[2].amount).toEqual(1000)
})

test("shoud edit an expense",()=>{
    const action = {
        type:"EDIT_EXPENSE",
        id:"-1",
        updates:{
            
            note:'',
            amount:1000
        }
    }
    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses)
})
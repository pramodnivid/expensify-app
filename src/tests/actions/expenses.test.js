import {addExpense,editExpense,removeExpense} from "../../actions/expenses"

test ("remove expense", ()=>{
    const action = removeExpense({id: "abc123"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "abc123"
    })
});


test ("edit expense ", ()=>{
    const action = editExpense("abc123",{amount:1000});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id: "abc123",
        updates:{amount:1000}
    })
});


test("add expense",()=>{

    const expenseData = {description:"asd",amount:100,notes:"adsasads",createdAt:"123"}
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test("add expense with default values",()=>{

    const expenseData = {}
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: {
            "amount": 0,
            "createdAt": 0,
            "description": "",
           "notes": "",
            id: expect.any(String)
        }
    })
})
import {createStore} from "redux"

const add = ({a,b}) => ( a+b)

console.log(add({b:1,a:3}))

//ActionGererators
const incrementCount = ({incrementBy=1}={}) => ({
    type:"INCREMENT",
    incrementBy
})


const decrementCount = ({decrementBy=1}={}) => ({
    type:"DECREMENT",
    decrementBy

})

const reset = () => ({
    type:"RESET",

})

const set = ({count=1}={}) => ({
    type:"SET",
    count

})


//reducers are pure functions
//never change state or action



const countReducer =  ((state={count:0},action)=>{
    console.log("runnning")

    switch(action.type){

        case "INCREMENT" : 
                            //const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy:1;
                            return{
                                    count: state.count+ action.incrementBy
                                };
        case "DECREMENT" : 
                            //const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy:1;
                            return{
                                    count: state.count- action.decrementBy
                                };
        
        case "SET" :  
                            //const count = typeof action.count === "number" ? action.count:1;
                            return{
                                    count: action.count
                                };

        case "RESET" : return{
                                count: 0
                            };

        
        default: return state;
    
    } 
       
});

const store = createStore(countReducer); 


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});



//Action- object that is sent to a store

// store.dispatch(
//     {
//         type:"INCREMENT",
//         incrementBy:5
//     }
// );

store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(decrementCount())
store.dispatch(reset())
store.dispatch(set({count:10}))



console.log(store.getState())



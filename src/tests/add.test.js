import { error } from "util";

const add = (a,b) => a+b
const getGreeting = (name = "Anonymous") => `Hello ${name}`


test("add 2 nos",() => {
    const result = add(3,4);
    expect(result).toBe(7)
    // if(result != 7){
    //     throw new error(" wrong answer expected 7")
    // }

});


test("greeting",() => {
    const name = "KMP"
    const result = getGreeting(name);
    expect(result).toBe(`Hello ${name}`)
    // if(result != 7){
    //     throw new error(" wrong answer expected 7")
    // }

});

test("greeting for no name",() => {
    const name = undefined
    const result = getGreeting(name);
    expect(result).toBe(`Hello Anonymous`)
    // if(result != 7){
    //     throw new error(" wrong answer expected 7")
    // }

});
import React from "react"
import {shallow} from "enzyme"
import ExpenseDashBoard from "../../components/ExpenseDashBoard"
import expenses from "../fixtures/expenses"

test("should render dashboard",()=>{
    const wrapper = shallow(<ExpenseDashBoard />);
    expect(wrapper).toMatchSnapshot();

})

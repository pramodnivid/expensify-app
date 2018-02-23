import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"
import NotFoundPage from "../../components/NotFoundPage"
import {shallow} from "enzyme"
test("Not found page",()=>{
    const wrapper = shallow(<NotFoundPage />);
    //expect(wrapper.find("h1").text()).toBe("Expensify")
    expect((wrapper)).toMatchSnapshot()

})

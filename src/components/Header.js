import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom"

const Header = ()=>(
    <div>
        <h1>Expensify</h1>

        <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
        <br/>

        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <br/>

        <NavLink to="/help" activeClassName="is-active">Help Expense</NavLink>

</div>
)
export default Header;
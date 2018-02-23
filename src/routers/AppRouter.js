import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Route,Switch,NavLink} from "react-router-dom"

import Header from "../components/Header.js"

import ExpenseDashBoardPage from "../components/ExpenseDashBoard.js"
import AddExpensePage from "../components/AddExpensePage.js"
import EditExpensePage from "../components/EditExpensePage.js"
import HelpExpensePage from "../components/HelpPage.js"
import NotFoundPage from "../components/NotFoundPage.js"

const AppRouter=()=> (
    <BrowserRouter>
        <div>
            <Header/>
        
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpExpensePage}/>
                <Route  component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter

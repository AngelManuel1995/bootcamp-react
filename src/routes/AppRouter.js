import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage' 
import EditExpensePage from '../components/EditExpensePage' 
import ExpenseDashboardPage from '../components/ExpenseDashboardPage' 
import Header from '../components/Header' 
import HelpPage from '../components/HelpPage' 
import NotFoundPage from '../components/NotFoundPage' 



const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> 
                <Route path="/"       exact={true} component={ExpenseDashboardPage}  />
                <Route path="/create" exact={true} component={AddExpensePage}  />
                <Route path="/edit/:id"   exact={true} component={EditExpensePage}  />
                <Route path="/help"   exact={true} component={HelpPage}  />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default Router
//Switch: Para que solo se ejecute una de las rutas
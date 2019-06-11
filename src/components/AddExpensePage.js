import React from 'react'
import ExpensesForm from './ExpensesForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses' 

const AddExpensePage = (props) => (
    <div>
        <p>Add a new expense</p>
        <ExpensesForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')
        }} />
    </div>
)

export default connect()(AddExpensePage)

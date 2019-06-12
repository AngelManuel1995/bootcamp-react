import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { Link } from 'react-router-dom'

const ExpensesSumary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'Gasto':'Gastos'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0,00')
    return (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Tienes <span>{expensesCount}</span> {expenseWord} Total <span>{formattedExpensesTotal}</span></h1>
            <div className="page-header__actions">
            <Link className="button" to="/create">Agregar gasto</Link>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSumary)
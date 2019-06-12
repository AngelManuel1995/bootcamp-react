import React from 'react';
import ExpensesForm from './ExpensesForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense( this.props.expense.id, expense )
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Editar Gasto</h1>
                </div>
                </div>
                <div className="content-container">
                    <ExpensesForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Eliminar Gasto</button>
                </div>
            </div>
        )
    }
}

const matStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(matStateToProps, mapDispatchToProps)(EditExpensePage)
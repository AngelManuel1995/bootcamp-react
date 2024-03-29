import React from 'react'
import ExpensesForm from './ExpensesForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses' 

export class AddExpensePage extends React.Component {

    onSubmit = ( expense ) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Ingresar gasto</h1>
                    </div>
                </div>
                <div className="content-container">
                    <p>Agregar nuevo gasto</p>
                    <ExpensesForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    } 
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)

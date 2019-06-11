import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setText } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore()
store.dispatch(addExpense({description:'To pay my car', note:'I need this money to pay my money car', amount:205045, createdAt:1000}))
store.dispatch(addExpense({description:'To pay my university', note:'I need this money to pay my money university', amount:595654, createdAt:10}))
store.dispatch(addExpense({description:'To pay my water', note:'I need this money to pay my water bill', amount:4433343, createdAt:-1000}))

// store.dispatch(setText('car'))

// setTimeout(() => {
//     store.dispatch(setText('pay'))
// },3000)


const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})





store.dispatch(addExpense({description:'To pay my car', note:'I need this money to pay my money car', amount:200, createdAt:1000}))
store.dispatch(addExpense({description:'To pay my university', note:'I need this money to pay my money university', amount:500, createdAt:-1000}))
// const { expense } = store.dispatch(addExpense({description:'To pay my house', note:'I need this money to pay my money house', amount:300, createdAt:-1000}))
// store.dispatch(editExpense(expense.id, {amount:900}))

// store.dispatch(removeExpense(expense))

store.dispatch(setText('to'))
store.dispatch(setStartDate(-1125))
store.dispatch(setEndDate(1500))
store.dispatch(sortByAmount())

const demoState = {
    expenses: [{
        id: 'assalkas',
        description: 'Renta de enero',
        note: 'Este es el pago final para esta dirección',
        amount: 7654,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
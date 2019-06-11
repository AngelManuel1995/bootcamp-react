import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const setCount = ({count = 1} = {}) => ({
    type:'SET',
    count
})

const resetCount = () => ({
    type:'RESET',
    count:0
})

const countReducer = (state = { count: 0 }, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {
                count : state.count +  action.incrementBy
            }
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count : action.count
            }
        case 'SET':
            return {
                count : action.count
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log('In the subscribe method',store.getState())
})

store.dispatch(incrementCount({incrementBy:4}))
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy:100}))
store.dispatch(setCount({count:400}))
store.dispatch(resetCount())




// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:10
// })
// store.dispatch({
//     type:'INCREMENT'
// })
// store.dispatch({
//     type:'DECREMENT',
//     incrementBy:5
// })
// store.dispatch({
//     type:'RESET'
// })


//createStore es una funcion que recibe como parametro un funcion un objeto con el cual se establecera el estado de la aplicacione

//store.getState() retorna el estado de la aplicacion
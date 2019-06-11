const filtersReducerDefaultValue = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export default ( state = filtersReducerDefaultValue, action ) => {
    switch(action.type){
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}
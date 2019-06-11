import React from 'react'
import { connect } from 'react-redux'
import { setText, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" onChange={(e) => {
            props.dispatch(setText(e.target.value))
        }} value = { props.filters.text }/>
        <select 
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'date'){
                    props.dispatch(sortByDate())
                }else if (e.target.value === 'amount'){
                    props.dispatch(sortByAmount())
                }
            }}    
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = ( state ) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
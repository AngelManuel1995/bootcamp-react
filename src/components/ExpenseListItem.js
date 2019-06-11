import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
    return (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>Description: { description }</h3>
        </Link>
        <p>Created At: { createdAt }  
             <span>Amount: <small> { amount } </small> </span>
        </p>
    </div>
    )
}


export default connect()(ExpenseListItem)
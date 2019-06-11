import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseComponent extends React.Component {

    constructor(props){
     
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? ( props.expense.amount / 100 ).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    

    onDescriptionChange = ( e ) => {
        let description = e.target.value
        this.setState( () => ({ description }))
    }

    onNoteChange = (e) => {
        let note = e.target.value
        this.setState( () => ({ note }))
    }

    onAmoutChange = (e) => {
        let amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused:focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount){
            if(!this.state.description){
                this.setState(() => ({error:'You have to provide the description'}))
            }else{
                this.setState(() => ({error:'You have to provide the amount'}))
            }
        }else {
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.error && <p>Este es un error: {this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange= {this.onDescriptionChange}            
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange= {this.onAmoutChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ ()=> false}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange = {this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
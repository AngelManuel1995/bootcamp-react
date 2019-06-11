import React from 'react'
import ReactDOM from 'react-dom'

const Info = ( props ) => (
    <div>
        <h1>Info</h1>
        <p> The info is: { props.info } </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
            <div>
                { props.isAdmin ? <p>This is private info. Please don't share!</p> : <p>You have to have a log in to see this information</p> }
                <WrappedComponent {...props}/>
            </div>
        )
    
}

const withAuthentication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { !props.isAuth ? 
                <div>
                    <h1>Unauthorized 403!</h1>
                    <p> You need to be Logged In. Please do it. </p>
                    <button onClick={props.handleLog} >Log in</button>
                </div> : 
                <div>
                    <h1>Wellcome</h1>
                    <p> What we are going to do today </p>
                    <button onClick={props.handleLog}>Log out</button>
                    <WrappedComponent />
                </div>
            }
                
        </div>
    )
}

const isLoggedIn = true
const AdminInfo = withAdminWarning(Info)
const LoginInfo = withAuthentication(Info)

ReactDOM.render(<LoginInfo isAuth = { isLoggedIn } info = 'This is a new info' />, document.getElementById('app'));
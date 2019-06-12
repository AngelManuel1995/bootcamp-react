import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <img className="icon-yuxi" src="https://www.yuxiglobal.com/assets/icons/YUXI_LOGO_WHITE.svg"/>
        <div className="box-layout__box">
            <h1 className="box-layout__title">YUXI GASTOS APP</h1>
            <p>Es tiempo de llevar las cuentas de lo que gastas</p>
            <button className="button" onClick={startLogin}>Login con Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {reducer, initialState} from '../../store'
import {login, numberAdd2} from '../../store/action'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text red">'Sem Usuário'</span>
                }
                <span className="text red"></span>
                <span className="text">{state.number} </span>
                <div>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'multiply7' })}
                    >*7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divisor25' })}
                    >/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'parseInt' })}
                    >Inteiro</button>
                    <button className="btn"
                        onClick={() => login(dispatch,"Borges")}
                    >Login</button>
                </div>
                <div>
                    <span className="text"></span>
                    <input type="number" className="input" onChange={(e) => dispatch({ type: 'setNumber', payload:parseInt(e.target.value) })} />
                </div>
            </div>
        </div>
    )
}

export default UseReducer

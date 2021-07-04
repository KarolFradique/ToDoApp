import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Cadastro from '../cadastro/cadastro'

export default porps =>(
    <Router history= {hashHistory}>

        <Route path= '/todos' component={Todo} />
        <Route path ='/cadastros' component={Cadastro}/>
        <Route path= '/about' component={About}/>
        <Redirect from = '*' to= '/todos'/>
        <Redirect from = '*' to= '/cadastros'/>

    </Router>
)
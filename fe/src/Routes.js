import { Route, Switch } from 'react-router-dom'

import Home from './components/Pages/Home'
import NewContact from './components/Pages/NewContact'
import EditContact from './components/Pages/EditContact'

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/new"component={NewContact}/>
            <Route path="/edit" component={EditContact}/>
        </Switch>
    )
}
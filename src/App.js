import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import JobItem from './components/JobItem'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/Jobs" component={Jobs} />
      <ProtectedRoute exact path="jobs/:id" component={JobItem} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App

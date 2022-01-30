import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Components/Home/Index';
import Layout from './Components/Layout/Layout';
import Login from './Components/Authentication/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Layout>
          <Route exact path="/">
            <Index />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Components/Home/Index';
import Layout from './Components/Layout/Layout';
import Login from './Components/Authentication/Login';
import { createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#06a3b8',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Futura, Bold, Souvenir'
  }
});

const blackTheme = createTheme({

});

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  );
}

export default App;

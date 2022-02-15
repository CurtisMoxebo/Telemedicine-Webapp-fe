import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Components/Home/Index';
import Layout from './Components/Layout/Layout';
import Login from './Components/Authentication/Login';
import { createTheme, ThemeProvider } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#06a3b8',
      light: '#64EDFF',
      dark: '#048394'
    },

    /* background: {
      paper: '#048394'
    }, */
    action: {
      hover: 'rgba(100, 237, 255, 0.3)'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Futura, Bold, Souvenir'
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      light: '#64EDFF',
      dark: '#048394'
    },

    /* background: {
      paper: '#048394'
    }, */
    action: {
      hover: 'rgba(100, 237, 255, 0.3)'
    }
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: 'Futura, Bold, Souvenir'
  }
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

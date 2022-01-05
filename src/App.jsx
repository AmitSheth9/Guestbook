import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Guestform from "./components/Form/Guestform";
import Header from "./views/Header/Header";
import { EntryProvider } from "./context/EntryContext";
import { GuestProvider } from "./context/GuestContext";
import DisplayEntries from "./components/Display/DisplayEntries";
import Home from "./views/Home/Home";
import './App.css'
import { ProvideAuth } from './context/AuthContext';
import Login from './views/Login/Login';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
  <ProvideAuth>
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
      <PrivateRoute path='/'>
          <Home/>
      </PrivateRoute>

      </Switch>
    </Router>
  </ProvideAuth>
 
  )
}

import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import Auth from './views/Auth';
import Links from './views/Header';
import ProtectedPage from './views/ProtectedPage';

export default function App() {
  const { currentUser } = useUserContext();
  return (
    <div>
      <BrowserRouter>
        <Links currentUser={currentUser} />
        <Switch>
          <Route exact path={'/'}>
            {currentUser ? <ProtectedPage /> : <Redirect to="/login" />}
          </Route>

          <Route exact path={'/login'}>
            {!currentUser ? <Auth /> : <Redirect to={'/'} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

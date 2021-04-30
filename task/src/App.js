import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';



function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-task">Crate Task</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/create-task">
          <CreateTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

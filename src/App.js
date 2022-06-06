import Application from './Application'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import './App.scss';

// const history = createBrowserHistory();
function App() {
  return (
    // <ConnectedRouter history={history}>
    //       <Application></Application>
    // </ConnectedRouter>
    <Application></Application>
  );
}

export default App;

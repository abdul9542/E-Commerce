import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';

import 'antd/dist/antd.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/homepage' exact component={Homepage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import { Switch, Route } from "react-router-dom";
import Header from './pages/header';
import { signUp } from './pages/signUp';

import './App.css';


function App() {



  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/signup" component={signUp} />
      </Switch>
    </div>
  );
}

export default App;

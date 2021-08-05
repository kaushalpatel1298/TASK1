import { Switch, Route } from "react-router-dom";
import { signUp } from './pages/signUp';

import './App.css';


function App() {



  return (
    <div className="App">
      
      <Switch>
        <Route path="/signup" component={signUp} />
      </Switch>
    </div>
  );
}

export default App;

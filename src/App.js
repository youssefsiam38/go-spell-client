import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './Components/SignUp.js'
import SignIn from './Components/SignIn.js'
import Spells from './Components/Spells/Spells.js'
import Spell from './Components/spellSomething/Spell.js'
import Footer from './Components/Spells/Footer.js'

function App() {
  return (
    <div className="App">
    <Router>
      <div>  
        <Switch>
          <Route exact path="/signup" component={SignUp}>
            {/* <SignUp /> */}
          </Route>
          <Route exact path="/signin" component={SignIn}>
            {/* <SignIn /> */}
          </Route>
          <Route exact path="/spell" component={Spell}>
            {/* <Spell /> */}
          </Route>
          <Route path="/" component={Spells}>
            {/* <Spells /> */}
          </Route>
        </Switch>
        <Footer title={`Made with love by Youssef Siam`}/>
      </div>
    </Router>
    </div>
  );
}

export default App;

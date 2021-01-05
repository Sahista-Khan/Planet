
import './App.css';
import Planet from './Components/Planet/Planet';
import People from './Components/People/People';
import Residents from './Components/Residents/Residents';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>  
          <Route path="/people" component={People} />
          <Route path="/residents" component={Residents} />
          <Route path="/" component={Planet} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

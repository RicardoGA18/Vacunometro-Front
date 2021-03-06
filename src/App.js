import {BrowserRouter,Switch,Route} from 'react-router-dom'
// Views
import HomeView from './views/HomeView'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

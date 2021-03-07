import {BrowserRouter,Switch,Route} from 'react-router-dom'
// Views
import HomeView from './views/HomeView'
import ProvinceView from './views/ProvinceView'
import DistrictView from './views/DistrictView'
import DepartmentView from './views/DepartmentView'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route exact path="/departamento/:id" component={DepartmentView} />
        <Route exact path="/provincia/:id" component={ProvinceView} />
        <Route exact path="/distrito/:id" component={DistrictView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
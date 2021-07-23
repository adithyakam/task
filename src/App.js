import './App.css';
import Login from './Components/Login/Login';
import Employee from './Components/EmployeeList/Employee';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Switch>

<Route path="/list">
<Employee/>
</Route>


<Route path="/">
<Login/>
</Route>


</Switch>



</BrowserRouter>
    </div>
  );
}

export default App;

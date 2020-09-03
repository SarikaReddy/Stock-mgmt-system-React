import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import SalesDashboard from './SalesDashboard';
import AdminDashboard from './AdminDashboard';


class App extends React.Component {
  render(){
    return(
     <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard/manager' component={Dashboard} />
            <Route exact path='/dashboard/sales' component={SalesDashboard} />
            <Route exact path='/dashboard/admin' component={AdminDashboard} />
          </Switch>
        </BrowserRouter>
     </div>
    );
  }
}

export default App;

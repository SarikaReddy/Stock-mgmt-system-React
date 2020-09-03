import React from 'react';
import SalesDashboard from './SalesDashboard';
import { Tabs, Tab, Button } from 'react-bootstrap';
import ProductDetails from './ProductDetails';
import PurchaseDetails from './PurchaseDetails';
import SupplierDetails from './SupplierDetails';
import EmployeeDetails from './EmployeeDetails';

class AdminDashboard extends React.Component{

    constructor(props){

        super(props);

        this.onClick = () => {
            this.props.history.push('/login');
        }
    }


    render(){
        return(
            <div className="dashboard">
                <h1>Admin Dashboard</h1>
                <Button color="primary" className="float-right" onClick={this.onClick}>
                    <span class="glyphicon glyphicon-log-out"></span> Log out
                </Button>
                <br/>
                <Tabs defaultActiveKey="product" justify fill>
                    <Tab eventKey="product" title="Products">
                        <ProductDetails/>
                    </Tab>
                    <Tab eventKey="purchase" title="Purchases">
                        <PurchaseDetails/> 
                    </Tab>
                    <Tab eventKey="supplier" title="Suppliers">
                        <SupplierDetails/>
                    </Tab>
                    <Tab eventKey="sales" title="Sales">
                        <SalesDashboard/>
                    </Tab>
                    <Tab eventKey="employees" title="Employees">
                        <EmployeeDetails/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default AdminDashboard;
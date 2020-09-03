import React from 'react';
import '../styles/Dashboard.css';
import { Tabs, Tab, Button } from 'react-bootstrap';
import ProductDetails from './ProductDetails';
import PurchaseDetails from './PurchaseDetails';
import SupplierDetails from './SupplierDetails';
import SalesDetails from './SalesDetails';

class Dashboard extends React.Component {

    constructor(props){

        super(props);

        this.onClick = () => {
            this.props.history.push('/login');
        }
    }

    render(){
        return(
            <div className="dashboard">
                <h1>Manager Dashboard</h1> 
                <Button color="primary" className="float-right" onClick={this.onClick}>
                    <span class="glyphicon glyphicon-log-out"></span> Log out
                </Button>
                <br/>
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
                        <SalesDetails/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Dashboard;
import React from 'react';
import Table from 'react-bootstrap/Table';

class SalesDetails extends React.Component {

    constructor(props){

        super(props);

        const salesDetails = [
            {salesperson_id:'1a',salesperson_name:'Kumar',sales_from:'01/01/2020',sales_to:'07/01/2020',sales_amount:10000},
            {salesperson_id:'1b',salesperson_name:'Chauhan',sales_from:'15/02/2020',sales_to:'20/02/2020',sales_amount:15000},
            {salesperson_id:'1c',salesperson_name:'Singh',sales_from:'02/03/2020',sales_to:'25/03/2020',sales_amount:12000},
            {salesperson_id:'1d',salesperson_name:'Bajaj',sales_from:'04/04/2020',sales_to:'07/08/2020',sales_amount:18000},
        ];

        this.state = {salesDetails};
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Sales Dashboard</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sales Person ID</th>
                            <th>Sales Person Name</th>
                            <th>Sales From</th>
                            <th>Sales To</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.state.salesDetails.map((x) => (
                            <tr>
                                <td>{x.salesperson_id}</td>
                                <td>{x.salesperson_name}</td>
                                <td>{x.sales_from}</td>
                                <td>{x.sales_to}</td>
                                <td>{x.sales_amount}</td>
                            </tr>
                       ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SalesDetails;
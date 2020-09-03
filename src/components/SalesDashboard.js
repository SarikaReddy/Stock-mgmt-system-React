import React from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

class SalesDashboard extends React.Component{
    constructor(props){

        super(props);

        const salesDetails = [
            {salesperson_id:'1a',salesperson_name:'Kumar',sales_from:'01/01/2020',sales_to:'07/01/2020',sales_amount:10000},
            {salesperson_id:'1b',salesperson_name:'Chauhan',sales_from:'15/02/2020',sales_to:'20/02/2020',sales_amount:15000},
            {salesperson_id:'1c',salesperson_name:'Singh',sales_from:'02/03/2020',sales_to:'25/03/2020',sales_amount:12000},
            {salesperson_id:'1d',salesperson_name:'Bajaj',sales_from:'04/04/2020',sales_to:'07/08/2020',sales_amount:18000},
        ];

        this.state = {
            salesDetails,
            isOpen : false,
            sales : {
                salesperson_id : "",
                salesperson_name : "",
                sales_from : "",
                sales_to : "",
                sales_amount : ""
            },
        };
        this.openModal = (id) => {
            
            let x = this.state.salesDetails.find( x => x.salesperson_id === id);

            this.setState({ 
                isOpen: true,
                sales : x
            });

        } 

        this.closeModal = () => this.setState({ isOpen: false });

        this.addEntry = (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {salesperson_id: data.get('salesperson_id'),
            salesperson_name: data.get('salesperson_name'),
            sales_from: data.get('sales_from'),
            sales_to: data.get('sales_to'),
            sales_amount: data.get('sales_amount')
            }

            this.setState({
                salesDetails : [...this.state.salesDetails, newValue]
            })

        }

        this.updateEntry = (event) => {
            
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {salesperson_id: data.get('salesperson_id'),
            salesperson_name: data.get('salesperson_name'),
            sales_from: data.get('sales_from'),
            sales_to: data.get('sales_to'),
            sales_amount: data.get('sales_amount')
            }

            this.setState({
                salesDetails : [...this.state.salesDetails, newValue]
            })

        };

        this.deleteEntry = (id) => {
            this.setState({
               salesDetails: this.state.salesDetails.filter(item => item.salesperson_id !== id)
            })
        };  
    }

    render(){
        return(
            <div className="dashboard">
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
                            <th>Actions</th>
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
                                <td>
                                <button onClick={() => this.openModal(x.salesperson_id)} class="btn btn-primary ml-5">Edit</button>
                                <button onClick={() => this.deleteEntry(x.salesperson_id)} class="btn btn-danger ml-5">Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>

                <br/>
                
                <h4>Add Sales Entry</h4>

                <form onSubmit={this.addEntry}>
                    <label><b>Salesperson ID: </b></label>
                    <input name="salesperson_id" type="text" placeholder="Enter salesperson ID"/>
                    <label><b>Salesperson Name: </b></label>
                    <input name="salesperson_name" type="text" placeholder="Enter salesperson name"/>
                    <label><b>Sales From: </b></label>
                    <input name="sales_from" type="date" placeholder="Enter from date"/>
                    <label><b>Sales To: </b></label>
                    <input name="sales_to" type="date" placeholder="Enter to date"/>
                    <br/>
                    <label><b>Sales Amount: </b></label>
                    <input name="sales_amount" type="number" placeholder="Enter amount"/>
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-success ml-5">Add Entry</button>
                </form>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.updateEntry}>
                            <label><b>Salesperson ID: </b></label>
                            <input name="salesperson_id" type="text" placeholder="Enter salesperson ID" defaultValue={this.state.sales.salesperson_id} readOnly/>
                            <br/>
                            <label><b>Salesperson Name: </b></label>
                            <input name="salesperson_name" type="text" placeholder="Enter salesperson name" defaultValue={this.state.sales.salesperson_name}/>
                            <br/>
                            <label><b>Sales From: </b></label>
                            <input name="sales_from" type="date" placeholder="Enter from date" defaultValue={this.state.sales.sales_from}/>
                            <br/>
                            <label><b>Sales To: </b></label>
                            <input name="sales_to" type="date" placeholder="Enter to date" defaultValue={this.state.sales.sales_to}/>
                            <br/>
                            <label><b>Sales Amount: </b></label>
                            <input name="sales_amount" type="number" placeholder="Enter amount" defaultValue={this.state.sales.sales_amount}/>
                            <br/>
                            <br/>
                            <button type="submit" onClick={() => this.deleteEntry(this.state.sales.salesperson_id)} class="btn btn-success ml-5">Update Entry</button>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default SalesDashboard;
import React from 'react';
import '../styles/Login.css';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.onSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            if(data.get('username') === "manager" && data.get('password') === "mgr"){
                this.props.history.push('/dashboard/manager');
            }
            else if(data.get('username') === "clerk" && data.get('password') === "sales"){
                this.props.history.push('/dashboard/sales');
            }
            else if(data.get('username') === "admin" && data.get('password') === "root"){
                this.props.history.push('/dashboard/admin');
            }
            else{
                alert("Incorrect username or password!!!");
            }
        }
    }


    render(){
        return(
            <div className="login-form">
                <h1>Stock management system</h1>
                <h3>(Platform for Admins, Managers and Sales clerks)</h3>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <label><b>Username: </b></label>
                    <input name="username" type="text" placeholder="Enter username"/>
                    <br/>
                    <label><b>Password: </b></label>
                    <input name="password" type="password" placeholder="Enter password"/>
                    <br/>
                    <br/>
                    <button class="btn btn-primary ml-5"><b>Sign in</b></button>
                </form>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <footer>
                    <p>(<b>For evaluation purposes</b> :- <b>Manager login</b>: username=manager password=mgr, <b>Admin login</b>: username=admin password=root, <b>Sales clerk login</b>: username=clerk password=sales)</p>
                </footer>
            </div>
        );
    }
}

export default Login;

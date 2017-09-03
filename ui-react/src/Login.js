import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import request from "../node_modules/superagent/superagent";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            login: "",
            password: ""
        }
    }

    // componentDidMount() {
    // }
    //
    // componentWillReceiveProps() {
    //     this.login();
    // }

    login = () => {
        console.log(this.state.login);
        request.post(
            '/login',
            {
                username: this.state.login, password: this.state.password
            }
        ).end((err, res) => {
            this.setState({
                message: res.body.message
            })
        })
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <p>
                                {this.state.message}
                            </p>
                            <div className="form-group form-inline">
                                <label>Login </label>
                                <input type="text" name="login" className="form-control" value={this.state.login}
                                       onChange={this.handleInputChange}/><br/>
                            </div>
                            <div className="form-group form-inline">
                                <label>Password </label>
                                <input type="password" name="password" className="form-control" value={this.state.password}
                                       onChange={this.handleInputChange}/><br/>
                            </div>
                            <button className="btn btn-default" onClick={this.login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

import React,{ Component, FormEvent } from "react";
import axios from 'axios';
import './login.css'



type state = {
    username: string,
    password: string
}

export default class Login extends Component<{}, state> {
    constructor(props: state) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }


    handleChangeUsername = (e: React.FormEvent<HTMLInputElement>): void => this.setState({username: (e.target as HTMLInputElement).value})
    handleChangePassword = (e: React.FormEvent<HTMLInputElement>): void => this.setState({password: (e.target as HTMLInputElement).value})


    handleLogin = async () => {
        try {
            if (this.state.username && this.state.password) {
                let login = await axios.post('/api/login', this.state);
                
            }
        } catch (error) {
            
        }
    }


    render() { 
        return(
            <div className='login-page'>
                <div className='login-modal'>
                    <input placeholder='username' onChange={this.handleChangeUsername} type="text"/>
                    <input placeholder="password" onChange={this.handleChangePassword} type="password"/>
                    <button>login</button>
                </div>
            </div>
        )
    }
}
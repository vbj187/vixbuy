import React, { Component } from 'react';
import FormInput from "../../components/form-input/FormInput";
import "./styles.scss";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };


    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>SignIn with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name='email'
                        type='Password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                </form>

                <input type='submit' value='Submit Form' />
            </div>
        );
    }
}

export default SignIn;
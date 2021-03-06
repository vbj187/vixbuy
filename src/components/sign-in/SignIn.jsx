import React, { Component } from 'react';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-buttom/CustomButton";
import "./styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
                    <div className='buttons' >
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {' '}
                        SignIn with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
import { Component } from "react";
import { nanoid } from "nanoid";

const Gender = {
    MALE: "male",
    FEMALE: "female"
};

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age:"",
}

export class SignUpForm extends Component {
    state = {...INITIAL_STATE};
   
    loginInputId = nanoid();
    emailInputId = nanoid();
    passwordInputId = nanoid();
    checkboxInputId = nanoid();
    
    handleChange = event =>{
        const { name, value, type, checked } = event.target;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    handleSubmit = event => {
        event.preventDefault();
        
        const {login, email, password, agreed, gender} = this.state;
        console.log(`Login: ${login}, Email:${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}`);
        this.props.onSubmit({ ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({...INITIAL_STATE});
    }

    render() {
        const { login, email, password, agreed, gender, age } = this.state;        

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.loginInputId}>Name</label>
                <input 
                        type="text" 
                        name="login"
                        placeholder="Enter login"
                        value={login}
                        onChange={this.handleChange}
                        id={this.loginInputId}
                    />
                <label htmlFor={this.emailInputId}>Email</label>
                <input 
                        type="email" 
                        name="email"
                        placeholder="Enter e-mail"
                        value={email}
                        onChange={this.handleChange}
                        id={this.emailInputId}
                    />     
                <label htmlFor={this.passwordInputId}>Password</label>
                <input 
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                        id={this.passwordInputId}
                />
                <label htmlFor={this.checkboxInputId}>Agree to terms</label>
                <input 
                    type="checkbox"
                    name="agreed"
                    checked={agreed}
                    onChange={this.handleChange}
                    id={this.checkboxInputId}            
                /> 
                <section>
                    <h2>Choose your gender</h2>
                    <label>
                        Male
                        <input
                            type="radio"
                            checked={gender === Gender.MALE}
                            name="gender"
                            value={Gender.MALE}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Female
                        <input
                            type="radio"
                            checked={gender === Gender.FEMALE}
                            name="gender"
                            value={Gender.FEMALE}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Choose your age
                        <select name="age" value={age} onChange={this.handleChange}>
                            <option value="" disabled>...</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36+">36+</option>
                        </select>
                    </label>
                </section>      
                <button type="submit" disabled={!agreed}>Sign up as {login}</button>
            </form>
        );
    };
}
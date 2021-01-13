import { useState } from 'react';
import { signup } from '../../services/userService';

function SignupPage(props) {
    const [formState, setFormState] = useState(getInitialFormState);

    function getInitialFormState() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }
//helper functions for handling change and submits
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    async function handleSubmit(event) {
        try{
             event.preventDefault(); // so page doesnt refresh and we dont lose state
            await signup(formState);
            setFormState(getInitialFormState);

            //TODO: comment out to see that user wont get added to state without
            props.handleSignupOrLogin();

            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <input 
                value={formState.firstName} 
                onChange={handleChange}
                name="firstName" 
                type="text"
                 />
                <input 
                value={formState.lastName} 
                onChange={handleChange}
                name="lastName" 
                type="text"
                 />
                <input 
                value={formState.email} 
                onChange={handleChange}
                name="email" 
                type="email"
                 />
                <input 
                value={formState.password} 
                onChange={handleChange}
                name="password" 
                type="password"
                 />
                 <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignupPage;
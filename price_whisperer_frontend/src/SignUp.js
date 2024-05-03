
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    async function submit(e) {
        console.log(email, password);
        e.preventDefault();

        try {
            // Send a POST request to the backend to signup the user
            const res = await axios.post("http://localhost:4000/signup", {
                email: email,
                password: password,
                username: username
            });

            console.log("Result: ",res.data);

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                // If user does not exist, show success message
                alert("Signup successful! You can now login.");
            }
        } catch (error) {
            // Handle any errors that occur during the signup process
            alert("Something went wrong. Please try again.");
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>

            <br/>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Signup;

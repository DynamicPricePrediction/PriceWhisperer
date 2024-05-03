import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "./UserContext";

function Login() {
    const navigate = useNavigate(); // Changed from history to navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = React.useContext(UserContext);

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/login", { // Changed the URL to the login endpoint
                email,
                password
            });
            if (res.data[0] === "exist") {
                setUser(res.data[1]);
                localStorage.setItem('user', res.data[1]);
                navigate("/");
                alert("Logged in!")
            } else if (res.data[0] === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details. Please try again.");
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submit}>
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
                <button type="submit">Login</button>
            </form>

            <br />
            <p>Don't have an account? <Link to="/signup">Sign Up here</Link></p>
        </div>
    );
}

export default Login;
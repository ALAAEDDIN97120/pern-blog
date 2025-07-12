import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form action="" className="registerForm">
				<label htmlFor="">Email</label>
				<input className="registerInput" type="email" placeholder="Email" />

				<label htmlFor="">Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Password"
				/>
				<button className="registerButton">Register</button>
			</form>

			<Link to="/login">
				<button className="registerLoginButton">Login</button>
			</Link>
		</div>
	);
};

export default Register;

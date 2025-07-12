import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homePage/HomePage.jsx";
import Setting from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Singel.jsx";
import Write from "./pages/write/Write.jsx";
import { useState } from "react";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";

function App() {
	const [user, setUser] = useState(true);
	return (
		<>
			<Topbar />

			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/write" element={user ? <Write /> : <Register />} />
				<Route path="/login" element={user ? <HomePage /> : <Login />} />
				<Route path="/register" element={user ? <HomePage /> : <Register />} />
				<Route
					path="/settings/:userId"
					element={user ? <Settings /> : <Register />}
				/>
				<Route path="/post/:postId" element={<Single />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;

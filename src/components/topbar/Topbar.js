import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Topbar = () => {
	const [user, setUser] = useState(true);
	return (
		<div className="top">
			<div className="topLeft">
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="iconTopbar" icon={faFacebook} />
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="iconTopbar" icon={faInstagram} />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon className="iconTopbar" icon={faTwitter} />
				</a>
				<a
					href="https://www.linkedin.com/in"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="iconTopbar" icon={faLinkedin} />
				</a>
			</div>
			<div className="topcenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/home">
							HOME
						</Link>
					</li>

					<li className="topListItem">
						<Link className="link" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/contact">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/" onClick={() => setUser(false)}>
							LOGOUT
						</Link>
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to={"/settings"}>
						<img className="topImg" src="/img/me.png" alt="" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem" style={{ marginRight: "-10px" }}>
							<Link className="link font" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link font" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<FontAwesomeIcon className="iconTopbar" icon={faSearch} />
			</div>
		</div>
	);
};

export default Topbar;

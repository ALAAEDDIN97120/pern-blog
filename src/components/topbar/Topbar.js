import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Topbar = () => {
	return (
		<div className="top">
			<div className="topLeft">
				<FontAwesomeIcon className="iconTopbar" icon={faFacebook} />
				<FontAwesomeIcon className="iconTopbar" icon={faInstagram} />
				<FontAwesomeIcon className="iconTopbar" icon={faTwitter} />
				<FontAwesomeIcon className="iconTopbar" icon={faLinkedin} />
			</div>
			<div className="topcenter">
				<ul className="topList">
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
				<FontAwesomeIcon className="iconTopbar" icon={faSearch} />
			</div>
		</div>
	);
};

export default Topbar;

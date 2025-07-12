import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarTtem">
				<hr />
				<span className="sidebarTitle">ABOUT ME</span>
				<hr />
				<img className="sidebarImg" src="/img/me.png" alt="" />
				<div className="text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. praesentium
						debitis corporis totam deserunt non aliquid libero .
					</p>
					<hr />
					<h4>CATEGORIES</h4>
					<hr />
					<div className="categories">
						<div className="leftSide">
							<p>Life</p>
							<p>Style</p>
							<p>Tech</p>
						</div>
						<div className="rightSide">
							<p>Music</p>
							<p>Soprt</p>
							<p>Cinema</p>
						</div>
					</div>
					<div className="followUs">
						<hr />
						<h4>FOLLOW US</h4>
						<hr />
						<div className="iconSidebar">
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
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
							>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

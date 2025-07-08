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
				<img
					className="sidebarImg"
					src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt=""
				/>
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
						<div className="topLeft">
							<FontAwesomeIcon className="iconSidebar" icon={faFacebook} />
							<FontAwesomeIcon className="iconSidebar" icon={faInstagram} />
							<FontAwesomeIcon className="iconSidebar" icon={faTwitter} />
							<FontAwesomeIcon className="iconSidebar" icon={faLinkedin} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

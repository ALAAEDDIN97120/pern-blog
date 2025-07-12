import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Update Your Account</span>
					<span className="settingsTitleDelete">Delete Account</span>
				</div>
				<form action="" className="settingsForm">
					<span className="titleImg">Profile Picture</span>
					<div className="imgContainer">
						<img src="/img/me.png" alt="" />
						<FontAwesomeIcon icon={faCircleUser} className="settingsIcon" />
						<input
							id="fileInput"
							type="file"
							style={{ display: "none" }}
							className="settingsImgInput"
						/>
					</div>
					<label>Username</label>
					<input type="text" placeholder="Alaaddin" name="name" />

					<label>Email</label>
					<input type="email" placeholder="alaaddin@gmail.com" name="email" />

					<label>Password</label>
					<input type="password" placeholder="Password" name="password" />

					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;

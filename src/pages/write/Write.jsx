import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "./write.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Write = () => {
	return (
		<div className="write">
			<div className="writeItem">
				<div className="imagWrite">
					<img
						className="writeImg"
						src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Umayyad_Mosque_-_courtyard.JPG"
						alt=""
					/>
				</div>

				<form action="" className="writeFormItem">
					<div className="WriteFormGroup">
						<label htmlFor="">
							<FontAwesomeIcon
								icon={faSquarePlus}
								type="files"
								className="writeIcon"
							/>
						</label>
						<input id="fileInput" type="file" style={{ display: "none" }} />
						<input className="writeInput" placeholder="Title" type="text" />
					</div>
					<div className="writeFormGroup">
						<textarea
							name=""
							id=""
							placeholder="Tell Your Story ...."
							className="writeInput writeText"
						></textarea>
					</div>
					<button className="writeSubmit" type="submit">
						publish
					</button>
				</form>
			</div>
		</div>
	);
};

export default Write;

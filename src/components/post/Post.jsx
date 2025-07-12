import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
	return (
		<div className="post">
			<div className="postItems">
				<img
					className="postImg"
					src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Umayyad_Mosque_-_courtyard.JPG"
					alt=""
				/>
				<span className="postDate">Music Life</span>
				<p className="titlePost">
					<Link className="link" to={"/post"}>
						Lorem ipsum dolor sit amet consectetur
					</Link>
				</p>
				<span className="postDate">1 hour ago</span>
				<p className="postDesc">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					sapiente tenetur quaerat error quasi dolores aspernatur numquam
					dolorem eos non tempore temporibus nisi qui, magnam porro illum ad
					quam nesciunt?
				</p>
			</div>
		</div>
	);
};

export default Post;

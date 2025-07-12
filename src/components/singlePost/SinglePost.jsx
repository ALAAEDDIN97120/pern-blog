import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./singlePost.css";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostItem">
				<img
					className="SinglePostImg"
					src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Umayyad_Mosque_-_courtyard.JPG"
					alt=""
				/>
				<p className="titleSinglePost">
					Lorem ipsum dolor sit amet consectetur
				</p>
				<div className="iconSingle">
					<FontAwesomeIcon
						icon={faPenToSquare}
						style={{ color: "#00D2FF", marginRight: "10px", fontSize: "20px " }}
					/>
					<FontAwesomeIcon
						icon={faTrash}
						style={{ color: "#FF3366", fontSize: "20px " }}
					/>
				</div>

				<div className="authSinglePost">
					<p>Auther: Umayyad Mosque </p>
					<p>1 hour ago</p>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
					laboriosam voluptas perferendis dolores quaerat labore provident
					libero sit nam ut fugit quis commodi, reiciendis eligendi aperiam
					doloremque numquam aut minima. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Explicabo laboriosam voluptas perferendis dolores
					quaerat labore provident libero sit nam ut fugit quis commodi,
					reiciendis eligendi aperiam doloremque numquam aut minima. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Explicabo laboriosam
					voluptas perferendis dolores quaerat labore provident libero sit nam
					ut fugit quis commodi, reiciendis eligendi aperiam doloremque numquam
					aut minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Explicabo laboriosam voluptas perferendis dolores quaerat labore
					provident libero sit nam ut fugit quis commodi, reiciendis eligendi
					aperiam doloremque numquam aut minima. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Explicabo laboriosam voluptas
					perferendis dolores quaerat labore provident libero sit nam ut fugit
					quis commodi, reiciendis eligendi aperiam doloremque numquam aut
					minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Explicabo laboriosam voluptas perferendis dolores quaerat labore
					provident libero sit nam ut fugit quis commodi, reiciendis eligendi
					aperiam doloremque numquam aut minima. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Explicabo laboriosam voluptas
					perferendis dolores quaerat labore provident libero sit nam ut fugit
					quis commodi, reiciendis eligendi aperiam doloremque numquam aut
					minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Explicabo laboriosam voluptas perferendis dolores quaerat labore
					provident libero sit nam ut fugit quis commodi, reiciendis eligendi
					aperiam doloremque numquam aut minima. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Explicabo laboriosam voluptas
					perferendis dolores quaerat labore provident libero sit nam ut fugit
					quis commodi, reiciendis eligendi aperiam doloremque numquam aut
					minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Explicabo laboriosam voluptas perferendis dolores quaerat labore
					provident libero sit nam ut fugit quis commodi, reiciendis eligendi
					aperiam doloremque numquam aut minima. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Explicabo laboriosam voluptas
					perferendis dolores quaerat labore provident libero sit nam ut fugit
					quis commodi, reiciendis eligendi aperiam doloremque numquam aut
					minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Explicabo laboriosam voluptas perferendis dolores quaerat labore
					provident libero sit nam ut fugit quis commodi, reiciendis eligendi
					aperiam doloremque numquam aut minima.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;

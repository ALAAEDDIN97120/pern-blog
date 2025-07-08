import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
const Singel = () => {
	return (
		<div className="singlePost">
			<SinglePost />
			<Sidebar />
		</div>
	);
};

export default Singel;

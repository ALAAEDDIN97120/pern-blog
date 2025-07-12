import "./contact.css";

const Contact = () => {
	return (
		<div>
			<div className="contactItem">
				<form action="" className="contactF">
					<label htmlFor="">Name & Lastname</label>
					<input type="text" placeholder="Your Name" />

					<label htmlFor="">phone Number</label>
					<input type="number" placeholder="Your Phone Number" />

					<label htmlFor="">Email</label>
					<input type="email" placeholder="****@gmail.com" />

					<label htmlFor="">Message</label>
					<textarea name="message" id="" rows={5}></textarea>
					<button type="submit">send</button>
				</form>
				<div className="conectIfo">
					<span className="email">My Email : alaaddin@gmail.com</span>
					<span className="phone">My Phone Number : 555 234 56 78</span>
					<span className="location">My location : Mersin Turkey </span>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="aboutItem">
				<span className="aboutTitle">My Journey with Syria</span>
				<p className="docBlog">
					<span className="docTitle"> Welcome to my blog!</span>
					I'm Alaaddin, a software engineering student and a passionate BackEnd
					developer. This blog is a personal project where I practice my
					React.js skills by building something meaningful and close to my
					heart. In this blog, I explore the beauty, history, and culture of
					Syria — a country full of inspiring places and deep stories. From the
					ancient streets of Damascus to the ruins of Palmyra, Syria holds
					treasures that deserve to be remembered and shared with the world.
					Each post is a small journey into Syrian cities, landmarks, or
					memories. While I'm still learning and improving my development
					skills, this blog is my way to combine creativity, coding, and love
					for my homeland. Thank you for visiting. I hope you enjoy the content
					and feel a little closer to Syria through these pages.
				</p>
				<img src="/img/me.png" alt="My photo" className="aboutImg" />
			</div>
		</div>
	);
};

export default About;

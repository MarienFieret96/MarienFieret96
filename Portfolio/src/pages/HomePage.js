import React from "react";
import { Contact, Frontpage, Aboutpage, Resume, Projects } from "../components";
const HomePage = () => {
	return (
		<main>
			<Frontpage />
			<Aboutpage />
			<Projects />
			<Resume />
			<Contact />
		</main>
	);
};

export default HomePage;

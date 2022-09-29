import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import ProfilePic from "../assets/headshot.jpg";

const Frontpage = () => {
	return (
		<Wrapper id="frontpage" className="page-100">
			<div className="image-container">
				<img src={ProfilePic} alt="" />
			</div>
			<div className="text-container">
				<h1>Marien Fieret</h1>
				<h4>junior webdeveloper</h4>
				<HashLink smooth to="#aboutpage">
					<button className="btn">Lees meer</button>
				</HashLink>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 1.5rem;
	align-items: center;
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 250px;
		height: 250px;
	}
	.image-container img {
		width: 250px;
		height: 250px;
		object-fit: contain;
		border-radius: 50%;
		border: 2px solid var(--secondary-color);
		box-shadow: var(--light-shadow);
	}
	.text-container {
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		.image-container {
			width: 400px;
			height: 400px;
		}
		.image-container img {
			width: 400px;
			height: 400px;
		}
		h1 {
			font-size: 4rem;
		}
		h4 {
			font-size: 2rem;
		}
		.btn {
			font-size: 1.25rem;
		}
	}
`;

export default Frontpage;

import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import previewSite from "../assets/previewSite.png";
import { IoIosConstruct } from "react-icons/io";

const Projects = () => {
	const { ref, inView } = useInView();
	const [header, setHeader] = useState(false);

	const toggleHeader = () => {
		setHeader(!header);
	};

	return (
		<Wrapper id="projects" className="page-100 section">
			<div ref={ref} className="project-page">
				<div className="title">
					<h1>Projecten</h1>
					<div className="underline"></div>
				</div>
				<div
					className={`${header ? "container-open container" : "container"}
					${inView ? "show" : "hidden"}
					`}
				>
					<div className="image-container">
						<a href="http://fieretvoorzeebanket.netlify.app" target="_blank">
							<img src={previewSite} alt="" />
						</a>
					</div>
					<div className="text-container">
						<div className="header">
							<div className="text">
								<h6>Fieret voor Zeebanket</h6>
							</div>
							<div
								className={`${header ? "icon" : "icon icon-none"}`}
								onClick={toggleHeader}
							>
								<FaMinus />
							</div>
							<div
								className={`${header ? "icon icon-none" : "icon"}`}
								onClick={toggleHeader}
							>
								<FaPlus />
							</div>
						</div>
						<div className="content">
							<p>
								Een functionele webshop voor Fieret voor Zeebanket: via de
								webshop kunnen klanten een bestelling plaatsen en deze op een
								later moment ophalen in de winkel. Dit project is gebouwd met
								ReactJS.
							</p>
							<div className="link">
								<Link to="/">
									<FaGithub /> Github
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${inView ? "show construction" : "hidden construction"}`}
				>
					<div className="image-container">
						<IoIosConstruct />
					</div>
					<div className="text-container">
						<div className="header">
							<div className="text">
								<h6>Coming soon..</h6>
							</div>
							<div className="icon">
								<FaPlus />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.project-page {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	.title {
		width: 100%;
	}
	.construction,
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 2.5rem;
		min-width: 250px;
		max-width: 300px;
		min-height: 50vh;
		background: var(--clr-grey-4);
		border-radius: var(--radius);
		border: none;
		box-shadow: var(--light-shadow);
		transition: 1.5s all;
	}
	.construction {
		display: none;
	}
	.hidden {
		opacity: 0;
		filter: blur(2px);
		transform: translateY(20%);
	}
	.show {
		opacity: 1;
		filter: blur(0);
		transform: translateY(0);
	}
	.image-container {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-basis: 50px;
		flex-grow: 1;
		cursor: pointer;
		border-radius: var(--radius) var(--radius) 0 0;
	}
	img {
		object-fit: contain;
		transform: scale(0.6);
		transition: var(--transition);
	}
	img:hover {
		transform: scale(0.62);
	}

	.text-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		background: var(--primary-color);
		flex-grow: 0;
		width: 100%;
		border-radius: 0 0 var(--radius) var(--radius);
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.5rem;
		padding-left: 1rem;
	}
	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 4rem;
		width: 4rem;
		cursor: pointer;
	}
	.icon:hover {
		color: var(--accent-color);
	}
	.construction .icon:hover {
		color: red;
		cursor: not-allowed;
	}
	.content {
		display: none;
		padding: 0 2rem 1rem 2rem;
	}
	a {
		color: var(--secondary-color);
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.container-open .text-container {
		flex-grow: 1;
	}
	.image-container:hover,
	.container-open .image-container {
		opacity: 0.9;
	}
	.container-open .content {
		display: block;
		padding: 0 2rem 1rem 2rem;
	}
	.container-open .header {
		border-bottom: 1px solid var(--clr-grey-10);
	}
	.icon-none {
		display: none;
	}
	@media screen and (min-width: 768px) {
		.construction {
			font-size: 4rem;
			display: flex;
		}
		.construction:hover {
			font-size: 4.5rem;
		}
		.project-page {
			justify-content: space-evenly;
		}
		.construction,
		.container {
			width: 275px;
		}
	}
	@media screen and (min-width: 1024px) {
		.construction,
		.container {
			width: 300px;
		}
	}
	@media (prefers-reduced-motion) {
		.show,
		.hidden {
			transition: none;
		}
	}
`;

export default Projects;

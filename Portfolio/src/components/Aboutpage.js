import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Sideshot from "../assets/sideshot.jpg";

const Aboutpage = () => {
	const { ref, inView } = useInView();
	return (
		<Wrapper id="aboutpage" className="page-100 section">
			<div className="title">
				<h1>Over mij</h1>
				<div className="underline"></div>
			</div>
			<div ref={ref} className="content-container">
				<div className={`${inView ? "show" : "hidden"} "text-container"`}>
					<h4>
						new <span>aboutSchema</span>(
					</h4>
					<h4> &#123;</h4>
					<h4>
						<span>name</span>: 'Marien Fieret',
					</h4>
					<h4>
						<span>age</span>: 25,
					</h4>
					<h4>
						<span>location</span>: 'Amersfoort',
					</h4>
					<h4>
						<span>description</span>: 'Tijdens mijn studie Information Sciences
						werd mijn interesse in programmeren gewekt. Alhoewel ik deze studie
						niet afrond, was de basis voor coderen gelegd. Vervolgens heb ik
						Udemy cursussen gevolgd, om mij verscheidene programmeertalen eigen
						te maken. <br />
						<br />
						Nu wil ik mijzelf graag binnen een bedrijf verder ontwikkelen als
						junior webdeveloper.',
					</h4>
					<h4>&#125;</h4>
					<h4>);</h4>
				</div>
				<div className="image-container">
					<img src={Sideshot} alt="" />
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.text-container {
	}
	h4 {
		font-weight: 500;
	}

	h4:nth-of-type(2),
	h4:nth-of-type(7) {
		margin-left: 1.5rem;
	}

	h4:nth-of-type(3),
	h4:nth-of-type(4),
	h4:nth-of-type(5),
	h4:nth-of-type(6) {
		margin-left: 2.5rem;
	}
	.image-container {
		display: none;
	}
	.hidden {
		opacity: 008;
		transform: translateY(10%);
	}
	.show {
		opacity: 1;
		transform: translateY(0);
		transition: 1s all;
	}

	@media screen and (min-width: 1440px) {
		.title {
			margin-bottom: 5rem;
		}
		.content-container {
			display: flex;
			align-items: center;
			gap: 8rem;
		}
		.image-container {
			display: flex;
			height: 400px;
			width: 400px;
			box-shadow: var(--dark-shadow);
		}
		img {
			object-fit: contain;
			border-radius: 2px;
		}
	}
	@media (prefers-reduced-motion) {
		.show,
		.hidden {
			transition: none;
		}
	}
`;

export default Aboutpage;

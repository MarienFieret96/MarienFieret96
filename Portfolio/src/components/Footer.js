import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<Wrapper>
			<h5>
				&copy; {new Date().getFullYear()}
				<span> Marien Fieret</span>
			</h5>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	z-index: 999;
	height: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--clr-black);
	text-align: center;
	span {
		color: var(--clr-grey-10);
	}
	h5 {
		color: var(--accent-color);
		margin: 0.1rem;

		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	@media (min-width: 776px) {
		flex-direction: row;
	}
`;

export default Footer;

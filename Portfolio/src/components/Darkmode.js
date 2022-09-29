import React from "react";
import styled from "styled-components";
import { useMainContext } from "../context/main_context";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Darkmode = () => {
	const { switchTheme, isDarkmodeOn, isSidebarOpen } = useMainContext();

	if (isDarkmodeOn) {
		return (
			<Wrapper>
				<div className="container" onClick={switchTheme}>
					<div className="icon" id="darkMode">
						<FaRegMoon />
					</div>
					<div
						className={`${isSidebarOpen ? "icon-text" : "icon-text-invisible"}`}
					>
						Light modus
					</div>
				</div>
			</Wrapper>
		);
	} else {
		return (
			<Wrapper>
				<div className="container" onClick={switchTheme}>
					<div className="icon" id="darkMode">
						<FaSun />
					</div>
					<div
						className={`${isSidebarOpen ? "icon-text" : "icon-text-invisible"}`}
					>
						Dark modus
					</div>
				</div>
			</Wrapper>
		);
	}
};

const Wrapper = styled.section`
	.container {
		display: flex;
		color: var(--secondary-color);
		padding: 1rem 1.5rem;
		font-size: 2rem;
		transition: var(--transition);
		cursor: pointer;
	}

	.icon,
	.icon-text {
		font-size: 1.75rem;
	}
	.icon-text {
		margin-left: 1rem;
	}
	.icon-text-invisible {
		display: none;
	}

	.icon:hover,
	.icon:focus {
		background: transparent;
		transition: var(--transition);
		color: var(--accent-color);
	}
`;

export default Darkmode;

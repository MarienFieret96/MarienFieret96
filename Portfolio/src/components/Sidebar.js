import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import Darkmode from "./Darkmode";
import {
	FaBars,
	FaEnvelope,
	FaFileImage,
	FaGraduationCap,
	FaHome,
	FaRegIdBadge,
} from "react-icons/fa";
import { useMainContext } from "../context/main_context";
import LogoD from "../assets/Logo_Dark.png";
import LogoL from "../assets/Logo_Light.png";

const Sidebar = () => {
	const { isSidebarOpen, openSidebar, closeSidebar, isDarkmodeOn } =
		useMainContext();
	const toggle = () => {
		if (isSidebarOpen) {
			closeSidebar();
		} else {
			openSidebar();
		}
	};

	const menuItem = [
		{
			path: "#",
			name: "Home",
			icon: <FaHome />,
		},
		{
			path: "#aboutpage",
			name: "Over mij",
			icon: <FaRegIdBadge />,
		},
		{
			path: "#projects",
			name: "Projecten",
			icon: <FaFileImage />,
		},
		{
			path: "#resume",
			name: "CV",
			icon: <FaGraduationCap />,
		},
		{
			path: "#contact",
			name: "Contact",
			icon: <FaEnvelope />,
		},
	];
	return (
		<Wrapper>
			<div className={`${isSidebarOpen ? "sidebar-open" : "sidebar"}`}>
				<div className="top-section">
					<img src={isDarkmodeOn ? LogoD : LogoL} alt="" className="logo" />
					<div className="bars">
						<FaBars onClick={toggle} />
					</div>
				</div>
				{menuItem.map((item, index) => {
					const { path, icon, name } = item;
					return (
						<HashLink
							smooth
							to={path}
							onClick={closeSidebar}
							key={index}
							className="link"
						>
							<div className="icon">{icon}</div>
							<div className="link-text">{name}</div>
						</HashLink>
					);
				})}
				<Darkmode />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	//  open sidebar styling

	.sidebar-open {
		width: 100%;
		background: var(--primary-color);
		color: var(--secondary-color);
		height: 100vh;
		transition: var(--transition);
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.top-section {
		display: flex;
		align-items: center;
		padding: 1rem 0.75rem;
	}
	.logo {
		margin: 0.5rem 0 0 0.5rem;
		height: 80px;
	}
	.bars {
		display: flex;
		font-size: 2.75rem;
		margin-left: auto;
		cursor: pointer;
	}
	.link {
		display: flex;
		color: var(--secondary-color);
		padding: 1rem 1.5rem;
		font-size: 2rem;
		transition: var(--transition);
	}
	.link:hover {
		background: var(--background-color);
		transition: var(--transition);
	}

	icon,
	.link-text {
		font-size: 1.75rem;
	}
	.link-text {
		transition: var(--transition);
		margin-left: 1rem;
	}

	// closed sidebar styling
	.sidebar {
		position: fixed;
		top: 0;
		background: var(--primary-color);
		color: var(--secondary-color);
		height: 100vh;
		padding: 0 1rem;
		width: 3.5rem;
		transition: var(--transition);
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: var(--dark-shadow);
	}

	.sidebar .logo,
	.sidebar .link-text {
		display: none;
	}
	.sidebar .link:focus,
	.sidebar .link:hover {
		background: transparent;
		transition: var(--transition);
		color: var(--accent-color);
	}
	@media screen and (min-width: 768px) {
		.sidebar-open {
			width: 350px;
			box-shadow: var(--dark-shadow);
		}
	}
`;

export default Sidebar;

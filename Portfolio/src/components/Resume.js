import React from "react";
import styled from "styled-components";
import {
	DiReact,
	DiHtml5,
	DiCss3,
	DiNodejsSmall,
	DiJsBadge,
	DiMongodb,
} from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { MdExplicit } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Resume = () => {
	const { ref, inView } = useInView();
	return (
		<Wrapper id="resume" className="page-100 section">
			<div className="title">
				<h1>CV</h1>
				<div className="underline"></div>
			</div>
			<div className="vaardigheden">
				<h4>
					<span>Vaardigheden</span>
				</h4>
				<div className="intro">
					Programmeertalen en frameworks waar ik ervaring mee heb.
				</div>
				<div ref={ref} className={`${inView ? "show" : "hidden"} skills`}>
					<div className="skill">
						HTML <DiHtml5 />
					</div>
					<div className="skill">
						CSS <DiCss3 />
					</div>
					<div className="skill">
						Javascript <DiJsBadge />
					</div>
					<div className="skill">
						ReactJS <DiReact />
					</div>
					<div className="skill">
						NodeJS <DiNodejsSmall />
					</div>
					<div className="skill">
						MongooseJS <DiMongodb />
					</div>
					<div className="skill">
						ExpressJS <MdExplicit />
					</div>
					<div className="skill">
						Flutter <SiFlutter />
					</div>
				</div>
			</div>
			<div className="onderwijs">
				<h4>
					<span>Onderwijs</span>
				</h4>
				<div className="opleidingen">
					<div className="opleiding">
						<b>Information Sciences</b>
					</div>
					<div className="locatie">Vrije Universiteit</div>
					<div className="tijd">2019 - 2021</div>
				</div>
				<div className="opleidingen">
					<div className="opleiding">
						<b>Wiskunde A - VWO certificaat</b>
					</div>
					<div className="locatie">Staatsexamen</div>
					<div className="tijd">2017 - 2018</div>
				</div>
				<div className="opleidingen">
					<div className="opleiding">
						<b>International Business (Propedeuse)</b>
					</div>

					<div className="locatie">Hogeschool Utrecht</div>
					<div className="tijd">2016 - 2017</div>
				</div>
				<div className="opleidingen">
					<div className="opleiding">
						<b>Havo - Economie en Maatschappij</b>
					</div>
					<div className="locatie">Van Lodenstein College</div>
					<div className="tijd">2010 - 2015</div>
				</div>
			</div>

			<div className="ervaring">
				<h4>
					<span>Werkervaring</span>
				</h4>
				<div className="opleidingen">
					<div className="opleiding">
						<b>Manager &amp; verkoopmedewerker</b>
					</div>
					<div className="locatie">Fieret voor Zeebanket</div>
					<div className="tijd">2012 - heden</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	font-size: 0.82rem;
	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin: 1rem 0;
		transition: all 3s;
		overflow: hidden;
	}
	.skill {
		background: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-width: 47%;
		border-radius: 1px;
		padding: 0.25rem 0.75rem;
		box-shadow: var(--light-shadow);
		transition: all 1s;
	}
	.hidden .skill {
		opacity: 0;
		transform: translateX(20%);
	}
	.show .skill {
		opacity: 0.9;
		transform: translateX(0);
	}
	.skill:nth-child(even) {
		transition-delay: 100ms;
	}
	.skill:nth-child(odd) {
		transition-delay: 50ms;
	}
	h4 {
		overflow: hidden;
		text-align: start;
		margin-bottom: 1rem;
	}

	h4:after {
		background-color: var(--clr-grey-1);
		content: "";
		display: inline-block;
		height: 1px;
		position: relative;
		vertical-align: middle;
		width: 70%;
	}
	h4:after {
		left: 0.5em;
		margin-right: -50%;
	}
	.ervaring,
	.onderwijs {
		margin-top: 3rem;
	}
	.opleidingen {
		display: flex;
		flex-wrap: wrap;
		margin: 0.75rem 0;
	}
	.tijd {
		margin-left: auto;
	}
	.opleiding {
		width: 100%;
	}
	@media screen and (min-width: 375px) {
		font-size: 0.85rem;
	}

	@media screen and (min-width: 768px) {
		font-size: 1rem;
		.skill {
			min-width: 22.5%;
		}
		h4:after {
			width: 90%;
		}
	}
	@media (prefers-reduced-motion) {
		.show,
		.hidden {
			transition: none;
		}
	}
`;

export default Resume;

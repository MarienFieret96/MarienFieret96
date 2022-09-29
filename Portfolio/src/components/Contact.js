import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const [name, setName] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_lxypzb6",
				"template_ema8w2n",
				form.current,
				"FVTCaEBS_JsKptPxJ",
			)
			.then(
				(result) => {
					console.log(result.text);
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	return (
		<Wrapper id="contact" className="page-95 section">
			<div className="title">
				<h1>Contact</h1>
				<div className="underline"></div>
			</div>
			<div className="form">
				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<label>Uw naam:</label>
					<input type="text" name="user_name" required />
					<label>Uw email:</label>
					<input type="email" name="user_email" required />
					<label>Uw bericht:</label>
					<textarea name="message" rows="7" required />
					<input type="submit" value="Verzenden" className="btn" />
				</form>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.contact-form {
		display: flex;
		flex-direction: column;
	}
	.form {
		padding: 0 1.75rem;
	}
	textarea {
		resize: none;
	}
	textarea,
	input {
		margin-bottom: 0.75rem;
		border-radius: var(--radius);
		border: 1px solid var(--clr-grey-4);
		padding: 0.5rem;
		font-size: 1rem;
	}
	input:nth-of-type(1),
	input:nth-of-type(2) {
		height: 1.75rem;
	}
	.btn {
		width: 100%;
		margin: 0.5rem auto;
	}

	@media screen and (min-width: 768px) {
		label,
		input,
		textarea,
		.btn {
			width: 500px;
			margin: 0.125rem auto;
		}
		.btn {
			margin: 1rem auto;
		}
	}
`;

export default Contact;

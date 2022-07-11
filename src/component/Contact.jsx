import React from "react";
// import "../style/mobile.css";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "../style/form.css";

function Contact() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => console.log(data);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div>
			<div className="container">
				{/* About us Header */}
				<div className=" About-header">
					<h1>About Us</h1>
					<p>
						Home <span>About Us</span>
					</p>
				</div>

				<Slider {...settings}>
					<div className="my-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>First Name</label>

							<input
								{...register("name", {
									required: "Name Address is required",
								})}
								placeholder=" Name"
							/>
							<input
								{...register("Email", {
									required: "Email Address is required",
								})}
								placeholder=" Email"
							/>
							<p>{errors.mail?.message}</p>
							<input
								{...register("text", { required: true })}
								placeholder=" Message"
							/>
							{errors.text && <p>Message is required</p>}

							<input type="submit" />
						</form>
					</div>
					<div className="my-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input {...register("firstName", { required: true })} />
							{errors.firstName?.type === "required" &&
								"First name is required"}

							<input {...register("lastName", { required: true })} />
							{errors.lastName && <p>Last name is required</p>}

							<input
								{...register("mail", { required: "Email Address is required" })}
							/>
							<p>{errors.mail?.message}</p>

							<input type="submit" />
						</form>
					</div>
				</Slider>
			</div>
		</div>
	);
}

export default Contact;

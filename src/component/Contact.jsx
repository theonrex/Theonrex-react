import React from "react";
// import "../style/mobile.css";
import Slider from "react-slick";
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
			<div>
				{/* About us Header */}
				<div className=" About-header">
					<h1>About Us</h1>
					<p>
						Home <span>About Us</span>
					</p>
				</div>
				<div className="container">
					<Slider {...settings}>
						<div className="my-form">
							<form onSubmit={handleSubmit(onSubmit)}>
							

								<input
									{...register("name", {
										required: "Name  is required",
									})}
									placeholder=" Name"
								/>
								<p>{errors.name?.message}</p>

								<input
									{...register("Email", {
										required: "Email Address is required",
									})}
									placeholder=" Email"
								/>
								<p>{errors.mail?.message}</p>
								<input
									type="text"
									{...register("text", { required: true })}
									placeholder=" Message"
								/>
								{errors.text && <p>Message is required</p>}

								<input type="submit" />
							</form>
						</div>
						<div className="my-form">
							<form onSubmit={handleSubmit(onSubmit)}>
								<input
									{...register("name", {
										required: "Name  is required",
									})}
									placeholder=" Name"
								/>
								<p>{errors.name?.message}</p>

								<input
									{...register("Email", {
										required: "Email Address is required",
									})}
									placeholder=" Email"
								/>
								<select {...register("services")}>
									<option value="Web"> Needed Services</option>
									<option value="Web">Web Design</option>
									<option value="Graphics">Graphics Design</option>
									<option value="ui">Ui/Ux</option>
									<option value="other">other</option>
								</select>

								<select {...register("Budget")}>
									<option value="50">Budget</option>
									<option value="50">$25 - $250</option>
									<option value="1000">$250 - $550</option>
									<option value="2000">$550 - $1000</option>
									<option value="2000">$1000 - or more</option>
								</select>
								<input
									type="text"
									{...register("text", { required: true })}
									placeholder=" Message"
								/>
								{errors.text && <p>Message is required</p>}

								<input type="submit" />
							</form>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default Contact;

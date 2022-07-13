// import React from "react";
// // import "../style/mobile.css";
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";
// import "../style/form.css";

// function Quote() {
// 	const {
// 		register,
// 		formState: { errors },
// 		handleSubmit,
// 	} = useForm();

// 	const onSubmit = (data) => console.log(data);


// 	return (
// 		<div>
// 			<div className="container">
// 				{/* About us Header */}
// 				<div className=" About-header">
// 					<h1>About Us</h1>
// 					<p>
// 						Home <span>About Us</span>
// 					</p>
// 				</div>

				
				
// 					<div className="my-form">
// 						<form onSubmit={handleSubmit(onSubmit)}>
// 							<input {...register("firstName", { required: true })} />
// 							{errors.firstName?.type === "required" &&
// 								"First name is required"}

// 							<input {...register("lastName", { required: true })} />
// 							{errors.lastName && <p>Last name is required</p>}

// 							<input
// 								{...register("mail", { required: "Email Address is required" })}
// 							/>
// 							<p>{errors.mail?.message}</p>

// 							<input type="submit" />
// 						</form>
// 					</div>
		
// 			</div>
// 		</div>
// 	);
// }

// export default Quote;

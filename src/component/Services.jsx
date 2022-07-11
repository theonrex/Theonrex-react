import React from "react";
import "../style/mobile.css";
import myimage from "../images/About.jpg";

function About() {


	return (
		<div>
			<div className="">
				{/* About us Header */}
				<div>
					<div className=" About-header">
						<h1>About Us</h1>
						<p>
							{" "}
							Home <span>/ Service</span>
						</p>
					</div>
					{/* About us Header */}
					<div className="rowx container">
						<div className="col-50">
							{" "}
							<img src={myimage} alt="" />
						</div>
						<div className="col-50">
							<h1>Over 2 years of experience providing expert services</h1>
							<hr />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Repellat consectetur velit perspiciatis, quibusdam
								necessitatibus itaque dicta est debitis laboriosam iste eius
								perferendis fugiat sit voluptatibus officia cumque ut nostrum a!
							</p>
						</div>
					</div>
				</div>
				<div className="rowx">
					{" "}
					<div className="col-30">
						{" "}
						<h1> Our Strategy</h1>
						<p>
							{" "}
							Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem ipsum
							dolor sit amet consectetur, adipisicing eli
						</p>
					</div>
					<div className="col-30">
						{" "}
						<h1> Our Strategy</h1>
						<p>
							{" "}
							Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem ipsum
							dolor sit amet consectetur, adipisicing eli
						</p>
					</div>{" "}
					<div className="col-30">
						{" "}
						<h1> Our Strategy</h1>
						<p>
							{" "}
							Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem ipsum
							dolor sit amet consectetur, adipisicing eli
						</p>
					</div>
				</div>
				<div>
					<div className="box">SCROLL DOWN TO TEST</div>
					<div id="counter-section-container">
						<div id="counter-box-container">
							<div id="counter-box">
								<h3>TITLE</h3>
								<span className="counter" data-number="150000"></span>
								<p>FIRST LINE OF COPY</p>
							</div>

							<div id="counter-box">
								<h3>TITLE</h3>
								<span className="counter" data-number="2000"></span>
								<p>
									FIRST LINE OF COPY
									<br /> SECOND LINE OF COPY
								</p>
							</div>

							<div id="counter-box">
								<h3>TITLE</h3>
								<span className="counter" data-number="100"></span>
								<p>
									FIRST LINE OF COPY
									<br />
									SECOND LINE OF COPY
									<br />
									THIRD LINE OF COPY
								</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h1> Our Team</h1>
					<div>
						<div className="col-30">
							images
							<h2> Olawande rex</h2>
							<h3>Ui/Ux</h3>
							<p>icon</p>
						</div>
						<div className="col-30">
							images
							<h2> Olawande rex</h2>
							<h3>Ui/Ux</h3>
							<p>icon</p>
						</div>{" "}
						<div className="col-30">
							images
							<h2> Olawande rex</h2>
							<h3>Ui/Ux</h3>
							<p>icon</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

import React from "react";
import "../style/style.css";
import emmmanuel from '../images/emmyzay.png';
import sola from '../images/sola.png'


function Testimonial () {
    return (
			<div className="text-bg">
				<div className="container">
					<div className="Testimonial container">
						<h2> Clients Reviews</h2>
					</div>
					<div className="test-flex ">
						<div className="test-img">
							<img src={emmmanuel} alt="client" className="client" />
						</div>{" "}
						<div className="section-text">
							<h3> AJAYI EMMANUEL</h3>
							<h4>
								MD 
								<span> EMMYZAY FURNITURE</span>
							</h4>
							<p>
								{" "}
								It has been awesome working with Theonrex, I've got the best design
								so far that a lot of people complement, thank you very
								much for a job well done, we'll do so much more together.
							</p>
							<p>
								{" "}
								<span>
									{" "}
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
								</span>{" "}
								
							</p>
						</div>
					</div>
					<div className="test-flex-right ">
						<div className="section-text right">
							<h3> SOLA BAMIDELE </h3>
							<h4>
								MD
								<span> LORD'S MINE PUBLISHERS</span>
							</h4>
							<p>
								{" "}
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
								quidem. Quae ullam obcaecati corrupti temporibus at culpa
								perferendis sapiente consequuntur repudiandae neque! Id quod ut
								minus, minima molestias explicabo nobis.
							</p>
							<p>
								{" "}
								<span>
									{" "}
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
									<i className="bi bi-star-fill"></i>
								</span>{" "}
								
							</p>
						</div>
						<div className="test-img">
							<img src={sola} alt="client" className="client" />
						</div>{" "}
					</div>
				</div>
			</div>
		);
}

export default Testimonial;
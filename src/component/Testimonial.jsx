import React from "react";
import "../style/style.css";
import client from '../images/Olawande.jpg'

function Testimonial () {
    return (
			<div className="text-bg">
				<div className="container">
					<div className="Testimonial container">
						<header className="test-text"> Testimonials</header>
						<h2> What Clients Say</h2>
					</div>
					<div className="test-flex ">
						<div className="test-img">
							<img src={client} alt="client" className="client" />
						</div>{" "}
						<div className="section-text">
							<h3>
								{" "}
								Olawande Rex <span> Web Development</span>
							</h3>
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
								five star{" "}
							</p>
						</div>
					</div>
					<div className="test-flex-right ">
						<div className="section-text-right">
							<h3>
								{" "}
								Olawande Rex <span> Web Development</span>
							</h3>
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
								five star{" "}
							</p>
						</div>
						<div className="test-img">
							<img src={client} alt="client" className="client" />
						</div>{" "}
					</div>
					<button className="test-btn"> See More</button>
				</div>
			</div>
		);
}

export default Testimonial;
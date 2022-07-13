import React from "react";
import "../style/mobile.css";
import myimage from "../images/About.jpg";
import $ from "jquery";
import Testimonial from "../component/Testimonial";
import client from "../images/Olawande.jpg";
import mission from "../icon/mission.png";
import achieve from "../icon/achievements.png";
import strategy from "../icon/strategy.png";



function About(){
	var a = 0;
	$(window).scroll(function () {
		var oTop = $("#counter-box").offset().top - window.innerHeight;
		if (a === 0 && $(window).scrollTop() > oTop) {
			$(".counter").each(function () {
				var $this = $(this),
					countTo = $this.attr("data-number");
				$({
					countNum: $this.text(),
				}).animate(
					{
						countNum: countTo,
					},

					{
						duration: 2220,
						easing: "swing",
						step: function () {
							//$this.text(Math.ceil(this.countNum));
							$this.text(Math.ceil(this.countNum).toLocaleString("en"));
						},
						complete: function () {
							$this.text(Math.ceil(this.countNum).toLocaleString("en"));
							//alert('finished');
						},
					}
				);
			});
			a = 1;
		}
	});

    return (
			<div>
				{/* About us Header */}
				<div className=" About-header">
					<h1>
						About Us
						<br />
						<span>
							{" "}
							<p>
								{" "}
								Home /<span>About Us</span>
							</p>
						</span>
					</h1>
				</div>
				{/* About us Header */}
				<div>
					<div className="container">
						<div className="rowx about-mg">
							<div className="col-50 about-img">
								{" "}
								<img src={myimage} alt="" />
							</div>
							<div className="col-50 about-text">
								<h1>
									Over 2 years of experience providing expert services for
									business
								</h1>
								<hr />
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Repellat consectetur velit perspiciatis, quibusdam
									necessitatibuLorem ipsum dolor sit amet consectetur,
									adipisicing elit. Repellat consectetur velit perspiciatis,
									quibusdam necessitatibuLorem ipsum dolor sit amet consectetur,
									adipisicing elit. Repellat consectetur velit perspiciatis,
									quibusdam necessitatibuLorem ipsum dolor sit amet consectetur,
									adipisicing elit. Repellat consectetur velit perspiciatis,
									quibusdam necessitatibus itaque dicta est debitis laboriosam
									iste eius perferendis fugiat sit voluptatibus officia cumque
									ut nostrum a!
								</p>
							</div>
						</div>
						<div className="rowx col30-mg">
							{" "}
							<div className="col-30 Our-text">
								<img src={strategy} alt="mission" />
								<h1> Our Strategy</h1>
								<p>
									{" "}
									Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem
									ipsum dolor sit amet consectetur, adipisicing eli
								</p>
							</div>
							<div className="col-30 Our-text">
								{" "}
								<img src={mission} alt="mission" className="mission" />
								<h1> Our Mission</h1>
								<p>
									{" "}
									Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem
									ipsum dolor sit amet consectetur, adipisicing eli
								</p>
							</div>{" "}
							<div className="col-30 Our-text">
								{" "}
								<img src={achieve} alt="mission" />
								<h1> Our Achievements</h1>
								<p>
									{" "}
									Lorem ipsum dolor sit amet consectetur, adipisicing eliLorem
									ipsum dolor sit amet consectetur, adipisicing eli
								</p>
							</div>
						</div>
					</div>
					<div className="counter-bg">
						<div id="counter-section-container" className="container">
							<div id="counter-box-container">
								<div id="counter-box">
									<span className="counter" data-number="150000"></span>
									<p>FIRST LINE OF COPY</p>
								</div>

								<div id="counter-box">
									<span className="counter" data-number="2000"></span>
									<p>FIRST LINE OF COPY</p>
								</div>

								<div id="counter-box">
									<span className="counter" data-number="100"></span>
									<p>FIRST LINE OF COPY</p>
								</div>
								<div id="counter-box">
									<span className="counter" data-number="100"></span>
									<p>FIRST LINE OF COPY</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Testimonial />
				</div>
				<div className="team-bg ">
					<div className="container team-h1">
						<h1> Our Team</h1>
						<div className="col-30 team-img ">
							<img src={client} alt="" />
							<div className="team-name">
								<h2> Olawande rex</h2>
								<h3>Ui/Ux</h3>
								<p>
									<i className="bi bi-instagram"></i>
									<i className="bi bi-github"></i>
									<i className="bi bi-twitter"></i>
								</p>
							</div>
						</div>{" "}
						<div className="col-30 team-img">
							<img src={client} alt="" />
							<div className="team-name">
								<h2> Olawande rex</h2>
								<h3>Ui/Ux</h3>
								<p>
									<i className="bi bi-instagram"></i>
									<i className="bi bi-github"></i>
									<i className="bi bi-twitter"></i>
								</p>
							</div>
						</div>{" "}
						<div className="col-30 team-img">
							<img src={client} alt="" />
							<div className="team-name">
								<h2> Olawande rex</h2>
								<h3>Ui/Ux</h3>
								<p>
									<i className="bi bi-instagram"></i>
									<i className="bi bi-github"></i>
									<i className="bi bi-twitter"></i>
								</p>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		);
}

export default About
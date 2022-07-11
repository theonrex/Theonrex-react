import React from "react";
import "../style/mobile.css";
// import myimage from "../images/About.jpg";
import black from "../images/black.jpg";


function About() {



	return (
		<div>
			{/* About us Header */}
			<div className=" About-header">
				<h1>About Us</h1>
				<p>
					{" "}
					Home <span> / Package</span>
				</p>
			</div>
			<div className="container">
				<div className="grid-container">
					<div className="grid-item">
						<div>
							<div
								className="accordion accordion-flush"
								id="accordionFlushExample"
							>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingOne">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseOne"
											aria-expanded="false"
											aria-controls="flush-collapseOne"
										>
											Graphics Design
										</button>
									</h2>
									<div
										id="flush-collapseOne"
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingOne"
										data-bs-parent="#accordionFlushExample"
									>
										<div className="accordion-body">
											<li>Logo</li>
											<li></li>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingTwo">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseTwo"
											aria-expanded="false"
											aria-controls="flush-collapseTwo"
										>
											Web / App Design
										</button>
									</h2>
									<div
										id="flush-collapseTwo"
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingTwo"
										data-bs-parent="#accordionFlushExample"
									>
										<div className="accordion-body">
											<li>Logo</li>
											<li></li>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingThree">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseThree"
											aria-expanded="false"
											aria-controls="flush-collapseThree"
										>
											Web Development
										</button>
									</h2>
									<div
										id="flush-collapseThree"
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingThree"
										data-bs-parent="#accordionFlushExample"
									>
										<div className="accordion-body">
											<li>Logo</li>
											<li></li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="grid-item">
						{" "}
						<div className="carousel-inner myCarousel">
							<div className="carousel-item active">
								<div className="rowx container ">
									<div className="package-col ">
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Logo Design</header>

												<p>
													{" "}
													Stand out from the crowd with a logo that fits your
													brand personality{" "}
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />

											<div className="package-text">
												<header>Brochure Design</header>
												<p>
													{" "}
													Get your main message across with informative
													brochures and leaflets{" "}
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Business Cards</header>
												<p>
													{" "}
													Crush the first impression with custom business card
													and stationery designs{" "}
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
									</div>
								</div>
								<div className="rowx container ">
									<div className="package-col ">
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Stationery Design</header>
												<p>
													{" "}
													Crush the first impression with custom business card
													and stationery designs{" "}
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Flyer Design</header>
												<p>
													Promote your business with printed marketing materials
													you can post anywhere and everywhere
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Book Design</header>
												<p>
													Allow your creativity to shine with a captivating book
													design
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
									</div>
								</div>
								<div className="rowx container ">
									<div className="package-col ">
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Menu Design</header>
												<p>
													Enticing menus and price lists for your restaurant,
													special event, and more!
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Packaging & Label Design</header>
												<p>
													PMake shoppers look twice with creative packaging and
													label designs.
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
										<div className="package-mini">
											<img src={black} alt="" className="sideimg" />
											<div className="package-text">
												<header>Social Media Design</header>
												<p>
													Do social media better than the rest with
													custom-designed skins, avatars & more
												</p>
											</div>
											<p className="package-click">
												{" "}
												<button className="package-btn">Purchase</button>
												<span className="start-mg">
													{" "}
													Starting at <span>$50</span>
												</span>
											</p>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

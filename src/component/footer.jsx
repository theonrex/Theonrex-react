import React from "react";
import "../style/style.css";

function footer() {
	return (
		<div className="reach">
			<div>
				<div className="rowx reach-bg container">
					<div className="mycol-45 reach-mg">
						<h2>Want to reach us?</h2>
					</div>
					<div className="mycol-45 button-mg ">
						<button className="footer-btn"> Contact Us</button>
					</div>
				</div>
			</div>

			<div className="footer-bg ">
				<footer className="footer_area section_padding_130_0">
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-6 col-lg-4">
								<div className="single-footer-widget section_padding_0_130">
									<div className="footer-logo mb-3"></div>
									<p className="mb-3-p">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit laborum quis labore cumque ex ullam vel, enim minima optio sequi quod sed dolorum impedit ab neque corporis, nemo accusantium magnam.
									</p>

									<div className="footer_social_area">
										<a
											href="#/"
											data-toggle="tooltip"
											data-placement="top"
											title=""
											data-original-title="Facebook"
										>
											<i className="fa fa-facebook"></i>
										</a>
										<a
											href="#/"
											data-toggle="tooltip"
											data-placement="top"
											title=""
											data-original-title="Github"
										>
											<i className="fa fa-github"></i>
										</a>
										<a
											href="#/"
											data-toggle="tooltip"
											data-placement="top"
											title=""
											data-original-title="dribbble"
										>
											<i className="fa fa-dribbble"></i>
										</a>
										<a
											href="#/"
											data-toggle="tooltip"
											data-placement="top"
											title=""
											data-original-title="Twitter"
										>
											<i className="fa fa-twitter"></i>
										</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg">
								<div className="single-footer-widget section_padding_0_130">
									<h5 className="widget-title">About</h5>
									<div className="footer_menu">
										<ul>
											<li>
												<a href="#/">About Us</a>
											</li>
											<li>
												<a href="#/">Corporate Sale</a>
											</li>
											<li>
												<a href="#/">Terms &amp; Policy</a>
											</li>
											<li>
												<a href="#/">Community</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg">
								<div className="single-footer-widget section_padding_0_130">
									<h5 className="widget-title">Support</h5>
									<div className="footer_menu">
										<ul>
											<li>
												<a href="#/">Help</a>
											</li>
											<li>
												<a href="#/">Support</a>
											</li>
											<li>
												<a href="#/">Privacy Policy</a>
											</li>
											<li>
												<a href="#/">Term &amp; Conditions</a>
											</li>
											<li>
												<a href="#/">Help &amp; Support</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg">
								<div className="single-footer-widget section_padding_0_130">
									<h5 className="widget-title">Contact</h5>
									<div className="footer_menu">
										<ul>
											<li>
												<a href="#/">Call Centre</a>
											</li>
											<li>
												<a href="#/">Email Us</a>
											</li>
											<li>
												<a href="#/">Term &amp; Conditions</a>
											</li>
											<li>
												<a href="#/">Help Center</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default footer;

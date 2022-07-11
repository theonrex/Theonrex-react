import React from "react";
import "../style/style.css";
import people from "../images/background laptop.jpg";
import coder from "../images/coder.jpg";
import black from "../images/black.jpg"
import ux from "../images/ux.png"
import graphics from "../images/graphic-designer.png";
import Publish from "../images/light-bulb.png";
import stat from "../images/stationery.png";
import webdev from "../images/web-development.png";
import Theoncarousel from "../component/Carousel";
import Testimonial from "../component/Testimonial";
import Price from "../component/price";
import Works from "../component/works";
import "../style/mobile.css"

function Home() {
	return (
		<div>
			<div className="containerx">
				<div className=" container">
					<div className="rowx homemg">
						<div className="mycol66">
							<h1 className="xlarge">
								Welcome to <br />
								our world
							</h1>
							<p className="xsmall">
								Our world revolves around exploring opportunities for <br />
								designing and developing as any projects possible.
							</p>
							<button className="started">Get Started </button>
							<button className="learn"> Learn More</button>
						</div>
						<div className="mycol33"></div>
					</div>
				</div>
			</div>
			{/* about us */}
			<div className="bg45">
				<div className=" container ">
					<div className="rowx ">
						<div className="mycol-45 mygetbg">
							<header className="Abt">2+ Years Experience</header>
							<h2 className="journeytext">
								Get started <br /> with us!
							</h2>
							<p className="xabout">
								We provide digital solution for business and make our <br />{" "}
								products / services easily assessable. We are a center that
								offer a <br />
								professionalized approach to offering the best design and dev
								services.
							</p>
						</div>
						<div className="col44bg ">
							<div className="mycol-44 mygetbg smcol ">
								<div className="smcol50">
									{" "}
									<span className="smspan">1</span>
									<h2>
										Website Design
										<br /> website Design
									</h2>
								</div>
								<div className="smcol50">
									{" "}
									<span className="smspan">2</span>{" "}
									<h2>
										Ui/Ux Design
										<br /> website Design
									</h2>
								</div>
							</div>
							<div className="mycol-44  smcol ">
								<div className="smcol50">
									{" "}
									<span className="smspan">1</span>
									<h2>
										Website Design
										<br /> website Design
									</h2>
								</div>
								<div className="smcol50">
									{" "}
									<span className="smspan">2</span>{" "}
									<h2>
										Ui/Ux Design
										<br /> website Design
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills */}
			<div className="startbg">
				<div className="startmg startwhite">
					<div className=" container startwhite">
						<div className="rowx">
							<div className="pcol46">
								<div>
									<img src={people} alt="" className="people" />
								</div>
								<div>
									<div className="mycol33">
										{" "}
										<h3>Lorem ipsum dolor sitl? rex fedsx</h3>
										<p>Are you intrested in our services & products? </p>
									</div>
									<div className="mycol33">
										<img src={coder} alt="" className="coder" />
									</div>
								</div>
							</div>
							<div className="pcol43">
								<header className="">2+ Years Exprience</header>
								<h2 className="journeytext">
									Get Started <br /> With Us!
								</h2>
								<p className="xabout">
									We provide digital solution for businees and make our <br />{" "}
									products / services easily assessable. We are a center that
									offer a <br />
									profesonalised approach to offering the best design and dev
									services.
								</p>
								<button className="myapp">MAKE AN APPOINTMENT </button>

								<div>
									<img src={black} alt="" className="black" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* products */}
			<div className="probg">
				<div className="container ">
					<h1 className="prohead">
						{" "}
						<span> Find a Product</span> <br /> Featured Products & Services
					</h1>

					<div className="rowx container ">
						<div className="productcol proli">
							<li>
								<img src={graphics} alt="graphics" className="imgproducts" />{" "}
								Graphics Design
							</li>
							<li>
								{" "}
								<img src={webdev} alt="webdev" className="imgproducts" /> Web
								Design
							</li>
							<li>
								{" "}
								<img src={stat} alt="branding" className="imgproducts" />{" "}
								Branding
							</li>
							<div className="productcolr proli">
								<li className="">
									{" "}
									<img src={ux} alt="ui/ux" className="imgproducts" /> Ui/Ux
								</li>
								<li>
									{" "}
									<img src={Publish} alt="book" className="imgproducts" /> Book
									Publishing
								</li>
							</div>
						</div>
						<div className="productcolrr proli">
							<li className="">
								{" "}
								<img src={ux} alt="ui/ux" className="imgproducts" /> Ui/Ux
							</li>
							<li>
								{" "}
								<img src={Publish} alt="book" className="imgproducts" /> Book
								Publishing
							</li>
						</div>
					</div>

					<div>
						{" "}
						<Theoncarousel />
					</div>
				</div>
			</div>
			{/* products */}
			{/* Testimonial */}
			<Testimonial/>
			{/* Testimonial */}
			{/* // price */}
			<Price/>
		{/* works */}
		<Works/>
		</div>
	);
}
export default Home;

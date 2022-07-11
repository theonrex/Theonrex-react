import React from "react";
import "../style/style.css";
import graphics from "../images/graphics.jpg"

function works() {
	return (
		<div className="work-bg ">
			<div className=" container">
				<div className=" container ">
					<h1 className="work-H1">Our Projects</h1>
					<div className="rowx homemg">
						<div className="work-col">
							<div className="work-img">
								<img src={graphics} alt="" />
							</div>
							<h1>Digital Calculator </h1>
							<p>
								for most business that want to optimize web solutions siness
								that want to optimize web solutionssiness that want to optimize
								web solutions
							</p>

							<button className="work-btn-view"> View</button>
							<button className="work-btn-source"> Git</button>
						</div>
						<div className="work-col">
							<div className="work-img">
								<img src={graphics} alt="" />
							</div>
							<h1>Digital Calculator </h1>
							<p>
								for most business that want to optimize web solutions siness
								that want to optimize web solutionssiness that want to optimize
								web solutions
							</p>

							<button className="work-btn-view"> View</button>
							<button className="work-btn-source"> Git</button>
						</div>
						<div className="work-col work-mg">
							<div className="work-img">
								<img src={graphics} alt="" />
							</div>
							<h1>Digital Calculator </h1>
							<p>
								for most business that want to optimize web solutions siness
								that want to optimize web solutionssiness that want to optimize
								web solutions
							</p>

							<button className="work-btn-view"> View</button>
							<button className="work-btn-source"> Git</button>
						</div>
					</div>
				</div>
			</div>
			<div className="work-div">
				<button className="work-btn-more"> More Projects</button>
			</div>
		</div>
	);
}

export default works;

import React from "react";
import "../style/style.css";
import black from "../images/black.jpg";


function Theoncarousel() {


	return (
		<div>
			<div
				id="carouselExampleCaptions"
				className="carousel slide "
				data-bs-ride="false"
				data-bs-touch="true"
			>
				<div className="carousel-inner myCarousel">
					<div className="carousel-item active">
						<div className="rowx container ">
							<div className="sliderCol ">
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>

								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics sharon <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
							</div>
						</div>
						<div className="carousel-caption d-none d-md-block"></div>
					</div>
					{/* second */}
					<div className="carousel-item">
						<div className="rowx container ">
							<div className="sliderCol ">
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics rex <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>

								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
								<div className="sidecolmini">
									<img src={black} alt="" className="sideimg" />

									<div className="sidetext">
										<header>
											Graphics Design <span> . .img</span>
										</header>
										<p>
											{" "}
											rex dfhd s odisknc ewoijdcm ejwisck rex dfhd s odisknc
											ewoijdcm ejwisckn{" "}
										</p>
									</div>
									<p className="sideclick">img | Click to purchase</p>
								</div>
							</div>
						</div>
						<div className="carousel-caption d-none d-md-block"></div>
					</div>
				</div>
				<div className="btn-mg">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
						className="active next-button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-double-left"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
							<path
								fillRule="evenodd"
								d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
						className="prev-button"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-double-right"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
							/>
							<path
								fillRule="evenodd"
								d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true">
						{" "}
					</span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}
export default Theoncarousel;

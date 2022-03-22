import React from "react";
import "../../styles/index.css";
import { useState } from "react";
import { number } from "prop-types";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("luzRoja");
	return (
		<>
			<div className="semaforo">
				<div className="base"></div>
				<div className="body">
					<div
						className={
							"luzRoja" + (color === "luzRoja" ? " glow" : "")
						}
						onClick={() => {
							setColor("luzRoja");
						}}></div>
					<div
						className={
							"luzAmarillo" +
							(color === "luzAmarillo" ? " glow" : "")
						}
						onClick={() => {
							setColor("luzAmarillo");
						}}></div>
					<div
						className={
							"luzVerde" + (color === "luzVerde" ? " glow" : "")
						}
						onClick={() => {
							setColor("luzVerde");
						}}></div>
				</div>
			</div>
			<div className="boton">
				<button
					className="btn btn-success"
					onClick={() => {
						if (color === "luzRoja") {
							setColor("luzAmarillo");
						} else if (color === "luzAmarillo") {
							setColor("luzVerde");
						} else if (color === "luzVerde") {
							setColor("luzRoja");
						}
					}}>
					Change Light
				</button>
			</div>
		</>
	);
};

export default TrafficLight;

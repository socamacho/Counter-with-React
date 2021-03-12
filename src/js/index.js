//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import SecondCounter from "./component/SecondCounter";

let counter = 0; // mi contador inicia en cero.
setInterval(function() {
	counter = counter + 1; //primer parametro
	ReactDOM.render(
		<SecondCounter segundos={counter} />,
		document.querySelector("#app")
	);
}, 1000);

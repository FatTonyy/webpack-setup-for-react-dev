import React from "react";
import ReactDom from "react-dom";
import "./scss/Main.scss";
import Header from "./Pages/Header";
function App() {
	return <Header />;
}

ReactDom.render(<App />, document.getElementById("app"));
if (module.hot) {
	module.hot.accept();
}

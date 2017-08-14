import "style-loader!css-loader!sass-loader!./styles/app.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from "react-redux";
import store from "./store/index";

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById("root")
);

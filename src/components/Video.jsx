import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

const Video = props => {
	const actions = [<FlatButton label="Close" primary={true} onTouchTap={props.close} />];
	return (
		<Dialog title={props.movie.Title} actions={actions} modal={false} open={props.open} onRequestClose={props.close}>
			<div style={{ margin: "40px" }}>
				<iframe
					width="640"
					height="360"
					src={`https://www.youtube.com/embed/${props.movie.trailer}`}
					frameBorder="0"
					allowFullScreen
				/>
			</div>
		</Dialog>
	);
};

export default Video;

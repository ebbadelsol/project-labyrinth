import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { startSlice, fetchUsername } from "../reducers/startSlice";

export const Start = () => {
	const [username, setLocalUsername] = useState("");

	const dispatch = useDispatch();

	const onInputChange = (e) => {
		setLocalUsername(e.target.value);
	};

	const sendUsername = () => {
		dispatch(startSlice.actions.setUsername(username));
		// if (username !== "") {
		// 	fetchUsername();
		// }
	};

	const start = () => {
		console.log("are you working?");
		fetchUsername();
		console.log(fetchUsername);
	};

	return (
		<div>
			<label>
				Choose a username
				<input
					placeholder="username"
					type="text"
					value={username}
					onChange={onInputChange}
				/>
			</label>
			<button onClick={sendUsername}>Submit username</button>
			<button onClick={start}>Start</button>
		</div>
	);
};
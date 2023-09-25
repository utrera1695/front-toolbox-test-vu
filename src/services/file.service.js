import axios from "axios";

export const getFiles = async (filename) => {
	return await axios.get(
		`files/data${filename ? `?filename=${filename}` : ""}`
	);
};

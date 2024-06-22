const httpReq = (url, method, type, data) => {
	const options = {
		method,
		headers: { "Content-Type": type },
	};

	if (data) {
		if (type === "multipart/form-data") {
			options["body"] = data;
		} else {
			options["body"] = JSON.stringify(data);
		}
	}

	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => resolve(data))
			.catch((err) => reject(err));
	});
};

export default {
	get: (url) => httpReq(url, "GET", "application/json"),
	post: (url, data) => httpReq(url, "POST", "application/json", data),
	postForm: (url, data) => httpReq(url, "POST", "multipart/form-data", data),
};

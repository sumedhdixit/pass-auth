exports.handleAuth = async (endpoint, body) => {
	const res = await fetch(
		`${process.env.REACT_APP_BACKEND_URI}/auth/${endpoint}`,
		{
			method: 'POST',
			withCredentials: true,
			credentials: 'include',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	if (!res.ok) {
		throw new Error(`An error has occured: ${res.status}`);
	}

	const data = await res.json();
	return data;
};

exports.fetchWithCookies = async (endpoint, body) => {
	const res = await fetch(
		`${process.env.REACT_APP_BACKEND_URI}/webauthn/${endpoint}`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			withCredentials: true,
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	if (!res.ok) {
		throw new Error(`An error has occured: ${res.status}`);
	}

	const data = await res.json();
	return data;
};

exports.handleProxy = async (endpoint, body) => {
	const res = await fetch(
		`${process.env.REACT_APP_BACKEND_URI}/proxy/${endpoint}`,
		{
			method: 'POST',
			withCredentials: true,
			credentials: 'include',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	if (!res.ok) {
		throw new Error(`An error has occured: ${res.status}`);
	}

	const data = await res.json();
	return data;
};

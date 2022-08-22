export const handleAuth = async (endpoint, body) => {
	const res = await fetch(
		`${process.env.REACT_APP_BACKEND_URI}/auth/${endpoint}`,
		{
			method: 'POST',
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

export const fetchWithCookies = async (endpoint, body) => {
	const res = await fetch(
		`${process.env.REACT_APP_BACKEND_URI}/${endpoint}`,
		{
			method: 'POST',
			body: JSON.stringify(body),
			includeCredentials: true,
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
}
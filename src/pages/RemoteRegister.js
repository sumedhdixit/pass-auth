import { useSearchParams } from 'react-router-dom';
import { handleAuth } from '../api/Auth';

const RemoteRegister = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const username = searchParams.get('username');
	const id = searchParams.get('id');

	const [password, setPassword] = useState();

	const authRequestOptions = async (e) => {
		e.preventDefault();
		const data = await fetchWithCookies(`registerRequest?id=${id}`, {});
		console.log(data);

		if (data.success) {
			try {
				let attResp = await startRegistration(data.options);
				console.log(attResp);
				const registerResponse = await fetchWithCookies(
					`registerResponse?id=${id}`,
					attResp
				);
				console.log(registerResponse);
			} catch (error) {
				if (error.name === 'InvalidStateError') {
					console.log(
						'Error: Authenticator was probably already registered by user'
					);
				} else {
					console.log(error);
				}

				throw error;
			}
		}
	};

	const authRequest = async (e, endpoint) => {
		e.preventDefault();
		const data = await handleAuth(endpoint, { username, password });
		console.log(data);

		if (data.success) {
			authRequest(e);
		} else {
			// Show Error
		}
	};
	return (
		<div>
			<input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				className="w-full rounded border p-3 mt-3 border-gray-500"
			/>
			<button
				className="w-full p-2 mt-3 font-extrabold uppercase text-white tracking-wider rounded bg-teal-400"
				onClick={(e) => authRequest(e, 'login')}
			>
				Register
			</button>
		</div>
	);
};

export default RemoteRegister;

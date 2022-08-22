import { useState } from 'react';
import { handleAuth } from '../api/Auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();

	const authRequest = async (e, endpoint) => {
		e.preventDefault();
		const data = await handleAuth(endpoint, { username, password });
		console.log(data);

		if (data.success) {
			navigate('/webauthn');
		}
	};

	return (
		<div className="p-3 h-full">
			<form className=" md:w-2/4 lg:1/4 mx-auto">
				<input
					type="text"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					className="w-full rounded border p-3 mt-3 border-gray-500"
				/>
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					className="w-full rounded border p-3 mt-3 border-gray-500"
				/>
				<div className="mt-5">
					<button
						className="w-full p-2 mt-3 font-extrabold uppercase text-white tracking-wider rounded bg-teal-400"
						onClick={(e) => authRequest(e, 'login')}
					>
						Login
					</button>
					<button
						className="w-full p-2 mt-3 font-extrabold uppercase text-white tracking-wider rounded bg-cyan-500"
						onClick={(e) => authRequest(e, 'register')}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Auth;

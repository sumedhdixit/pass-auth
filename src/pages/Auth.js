import { useState, useContext } from 'react';
import { handleAuth, handleProxy } from '../api/Auth';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Auth = () => {
	const { appUsername, setAppUsername, proxyID, setProxyID } =
		useContext(AuthContext);
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const navigate = useNavigate();

	const authRequest = async (e, endpoint) => {
		e.preventDefault();
		const data = await handleAuth(endpoint, { username, password });
		console.log(data);

		if (data.success && endpoint === 'login') {
			setAppUsername(username);
			navigate('/webauthn');
		} else {
			setAppUsername(username);
			navigate('/');
		}
	};

	const proxyRequest = async (e) => {
		e.preventDefault();

		const body = { username, proxy_type: 'signin' };
		const data = await handleProxy('create', body);
		setProxyID(data.id);

		navigate(`/proxy?id=${proxyID}`);
		// "/proxy/singInRequest?proxyid"
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
					<button
						className="w-full p-2 mt-5 font-extrabold uppercase text-white tracking-wider rounded bg-cyan-300"
						onClick={(e) => proxyRequest(e)}
					>
						Show QR
					</button>
					{/* New page with the username and verify button */}
					{/* Verify link: /webauthn/signinrequest?proxyid={proxyID} */}
					{proxyID && <p>QR with proxyID {proxyID}</p>}
				</div>
			</form>
		</div>
	);
};

export default Auth;

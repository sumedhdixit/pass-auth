import { fetchWithCookies, handleProxy } from '../api/Auth';
import { useSearchParams } from 'react-router-dom';
import {
	startRegistration,
	startAuthentication,
} from '@simplewebauthn/browser';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Verify = () => {
	const [proxyID, setProxyID] = useSearchParams();

	const handleVerify = async (e) => {
		e.preventDefault();

		const data = await handleProxy(
			`registerRequest?id=${proxyID.get('id')}`,
			{}
		);
		console.log(data);

		if (data.success) {
			try {
				let attResp = await startRegistration(data.options);
				console.log(attResp);
				const registerResponse = await fetchWithCookies(
					'registerResponse',
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
	return (
		<h1>
			<button
				className="w-full p-2 mt-5 font-extrabold uppercase text-white tracking-wider rounded bg-cyan-300"
				onClick={(e) => handleVerify(e)}
			>
				Verify
			</button>
		</h1>
	);
};

export default Verify;

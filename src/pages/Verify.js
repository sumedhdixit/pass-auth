import { fetchWithCookies, handleProxy } from '../api/Auth';
import { useSearchParams } from 'react-router-dom';
import {
	startRegistration,
	startAuthentication,
} from '@simplewebauthn/browser';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Verify = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleVerify = async (e) => {
		e.preventDefault();
		console.log(
			`${searchParams.get('id')} for ${searchParams.get('username')}`
		);

		const data = await handleProxy(
			`signInRequest?id=${searchParams.get('id')}`,
			{
				username: searchParams.get('username'),
			}
		);
		console.log(data);

		if (data.success) {
			try {
				let attResp = await startAuthentication(data.options);
				console.log(attResp);
				const signInResponse = await handleProxy('signInResponse', {
					attestation: attResp,
					username: searchParams.get('username'),
				});
				console.log(signInResponse);
			} catch (error) {
				console.log(error);
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

import { useState } from 'react';

const Auth = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

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
					<button className="w-full p-2 mt-3 font-extrabold uppercase text-white tracking-wider rounded bg-teal-400">
						Login
					</button>
					<button className="w-full p-2 mt-3 font-extrabold uppercase text-white tracking-wider rounded bg-cyan-500">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Auth;

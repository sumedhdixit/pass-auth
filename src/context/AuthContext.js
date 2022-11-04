import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [appUsername, setAppUsername] = useState();
	const [proxyID, setProxyID] = useState();

	return (
		<AuthContext.Provider
			value={{ appUsername, setAppUsername, proxyID, setProxyID }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.js';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Auth from './pages/Auth';
import Verify from './pages/Verify';

function App() {
	return (
		<AuthProvider>
			<div className="App font-manrope h-screen">
				<Navbar />
				<Router>
					<Routes>
						<Route path="/" element={<Auth />} />
						<Route path="/webauthn" element={<Main />} />
						<Route path="/proxy" element={<Verify />} />
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	);
}

export default App;

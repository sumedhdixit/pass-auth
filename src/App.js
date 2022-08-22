import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './pages/Main';
import Auth from './pages/Auth';

function App() {
	return (
		<div className="App font-manrope h-screen">
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Auth />} />
					<Route path="/webauthn" element={<Main />} />
					<Route />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

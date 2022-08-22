import './index.css';
import { IoMdFingerPrint } from 'react-icons/io';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Auth from './pages/Auth';

function App() {
	return (
		<div className="App font-manrope h-screen">
			<Navbar />
			{/* <Main /> */}
			<Auth />
		</div>
	);
}

export default App;

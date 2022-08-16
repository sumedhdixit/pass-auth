import './App.css';
import { IoMdFingerPrint } from 'react-icons/io';
function App() {
	return (
		<div className="App font-manrope h-full">
			<div className="header h-1/6 bg-grey">WebAuthN Project</div>
			<div>
				<h3>Your Registered Credentials :</h3>
				{/* {!credential && (<h3>No Credentials Found</h3>)} */}
			</div>
			<div className="flex justify-center text-center ">
				<button className="  flex px-5 py-2 m-2 rounded bg-teal-400">
					<IoMdFingerPrint className=" m-2" />
					Register
				</button>
				<button className=" px-5 py-2 m-2 rounded bg-cyan-500">Login</button>
			</div>
		</div>
	);
}

export default App;

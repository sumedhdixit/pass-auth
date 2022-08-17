const Main = () => {
	return (
		<div className="p-3 h-full">
			<div className="mt-4">
				<h3 className="text-lg md:text-2xl font-bold">
					Your Registered Credentials :
				</h3>
				{/* {!credential && (<h3>No Credentials Found</h3>)} */}
				<p className="italic ">No Credentials Found</p>
			</div>
			<div className="w-full mt-20">
				<div className="md:flex ">
					<button className="block w-full text-lg md:text-xl text-white p-2 mt-3 md:mr-3 rounded bg-teal-400">
						{/* <IoMdFingerPrint className=" m-2" /> */}
						Add a credential
					</button>
					<button className="block w-full text-lg md:text-xl text-white p-2 mt-3 rounded  bg-cyan-500">
						Try reauth
					</button>
				</div>

				<button className="block w-full text-lg font-extrabold uppercase tracking-wider rounded p-2 mt-3 text-cyan-600">
					Sign out
				</button>
			</div>
		</div>
	);
};

export default Main;
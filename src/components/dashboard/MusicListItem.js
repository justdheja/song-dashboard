const MusicListItem = ({ data }) => {
	return (
		<div className="bg-gray-800 flex justify-between my-4 pl-4 rounded-lg">
			<div className="flex py-2">
				<div
					className={
						data.downloaded
							? 'w-2 h-14 rounded-full -ml-4 mr-4 my-auto bg-green-400'
							: 'w-2 h-14 rounded-full -ml-4 mr-4 my-auto bg-red-400'
					}
				/>
				<div>
					<h3 className="font-semibold">{data.song_name}</h3>
					<h5 className=" font-light">{data.band_name}</h5>
					<h6 className=" font-thin text-sm">{data.year}</h6>
				</div>
			</div>
			<div className="flex">
				<div className="bg-gray-800 rounded-lg flex px-2 items-center z-50">
					<button
						className={
							data.downloaded
								? 'rounded-2xl transition duration-100 bg-green-400 px-4 py-2 text-gray-800 hover:bg-green-500'
								: 'rounded-2xl transition duration-100 bg-transparent border-2 border-red-400 px-4 py-2 text-red-400 hover:bg-red-400 hover:text-gray-800'
						}
					>
						{data.downloaded ? 'Already download' : 'Not yet, Download now !'}
					</button>
				</div>
        <div className="bg-gray-700 flex items-center p-4 rounded-r-lg -ml-4">
          <p className="text-2xl font-bold cursor-pointer pl-4">...</p>
        </div>
			</div>
		</div>
	);
};

export default MusicListItem;

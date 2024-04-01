import React from 'react';

const UsersLoading = () => {
	return (
		<div className="w-full grid grid-cols-1 grid-rows-5 md:grid-cols-2 gap-6 grow py-4 ">
			{Array(20)
				.fill(0)
				.map((_, idx) => {
					return (
						<div key={idx} className=" card-neu flex items-center h-full">
							<div className="w-full py-4 px-4 border-r-2 border-black rounded-lg h-20 gap-2 flex flex-col justify-center">
								<div className="w-full flex grow h-3/4 justify-between items-start">
									<h1 className="bg-skeleton h-full w-1/2 rounded-md"></h1>

									{/* status */}
									<div className="w-1/5 h-1/2 bg-skeleton rounded-md"></div>
								</div>
								<p className="w-full bg-skeleton h-1/2 rounded-md"></p>
							</div>

							{/* actions */}
							<div
								className={` flex md:flex-col lg:flex-row gap-2 p-4 justify-center items-center duration-300 transition-transform`}
							>
								{/* edit button */}
								<button className="p-2 h-8 w-8 rounded-lg bg-skeleton"></button>

								{/* cancel button */}
								<button className="p-2 h-8 w-8 rounded-lg bg-skeleton"></button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default UsersLoading;

import React from 'react';

const Loading = () => {
	return (
		<div className="w-full h-screen pt-24 flex flex-col gap-4">
			{/* Detail Post */}
			<div className="border-2 border-black p-4 shadow-neu rounded-lg bg-teal-200 h-1/2 flex flex-col gap-4">
				<div id="title" className="w-full bg-skeleton h-1/4 rounded-lg"></div>
				<div id="body" className="h-full grow rounded-lg bg-skeleton"></div>
				<div className="flex justify-end h-1/4">
					<div className="text-right bg-skeleton rounded-lg w-1/3 h-1/2"></div>
				</div>

				{/* comments */}
			</div>
			<div className="p-4 h-1/2 bg-gray-100 shadow-neu rounded-lg flex flex-col gap-4">
				<h1 className=" font-semibold">Comments :</h1>
				{Array(2)
					.fill(0)
					.map((_, idx) => {
						return (
							<div
								key={idx}
								className={`flex rounded-lg h-full ${
									idx % 2 === 1 ? 'justify-end' : ''
								}`}
							>
								<div
									className={`flex flex-col border border-gray-700 rounded-lg p-2 shadow-neu w-3/4 bg-teal-200`}
								>
									<h3 className=" bg-skeleton rounded-md h-1/6 mb-1 w-1/3"></h3>
									<p className=" bg-skeleton rounded-md h-1/6 w-1/3"></p>
									<p className="mt-2 bg-skeleton rounded-md h-1/2"></p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Loading;

import React from 'react';

const PostsLoading = () => {
	return (
		<div className="w-full pt-24 min-h-screen flex flex-col p-8 gap-8">
			<h1 className=" text-2xl font-bold">Posts</h1>
			<div className=" w-full grid grid-cols-1 gap-6">
				{Array(8)
					.fill(0)
					.map((_, idx) => {
						return (
							<div
								key={idx}
								className=" card-neu p-4 w-full h-32 flex flex-col gap-4"
							>
								<h1 className="h-1/3 w-1/2 bg-skeleton rounded-lg "></h1>
								<p className=" w-full h-1/2 bg-skeleton rounded-lg "></p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default PostsLoading;

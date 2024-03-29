import { Comment } from '@/types/comment';
import React from 'react';

type Props = {
	comments: Comment[];
};
const ListComments = ({ comments }: Props) => {
	return (
		<div className="p-4 bg-gray-100 shadow-neu rounded-lg flex flex-col gap-4">
			<h1 className=" font-semibold">Comments :</h1>
			{comments.map((comment: Comment, idx) => {
				return (
					<div
						key={comment.id}
						className={`flex rounded-lg ${idx % 2 === 1 ? 'justify-end' : ''}`}
					>
						<div
							className={`flex flex-col border border-gray-700 rounded-lg p-2 shadow-neu w-3/4 bg-lime-200`}
						>
							<h3 className=" font-semibold">{comment.name}</h3>
							<p className=" text-[12px] italic">{comment.email}</p>
							<p className="mt-2">{comment.body}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ListComments;

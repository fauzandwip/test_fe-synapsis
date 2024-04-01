import { Post } from '@/types/post';
import React from 'react';

const PostCard = ({ post }: { post: Post }) => {
	return (
		<div className=" border-2 border-black p-4 shadow-neu rounded-lg hover:bg-lime-400 cursor-pointer">
			<h1 className=" text-2xl font-bold mb-4">{post.title}</h1>
			<p className=" w-full line-clamp-2">{post.body}</p>
		</div>
	);
};

export default PostCard;

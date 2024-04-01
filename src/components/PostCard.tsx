import { Post } from '@/types/post';
import React from 'react';

const PostCard = ({ post }: { post: Post }) => {
	return (
		<div className=" card-neu p-4 hover:bg-teal-300 cursor-pointer btn-press">
			<h1 className=" text-2xl font-bold mb-4">{post.title}</h1>
			<p className=" w-full line-clamp-2">{post.body}</p>
		</div>
	);
};

export default PostCard;

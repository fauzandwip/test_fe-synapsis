import ListComments from '@/components/ListComments';
import { GOREST_URL } from '@/config/config';
import { Comment } from '@/types/comment';
import { Post } from '@/types/post';
import { User } from '@/types/user';
import { Metadata } from 'next';
import React from 'react';

type Props = {
	params: {
		id: string;
	};
};

const fetchPost = async (id: string) => {
	try {
		const response = await fetch(`${GOREST_URL}/posts/${id}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
const fetchUser = async (id: number) => {
	try {
		const response = await fetch(`${GOREST_URL}/users/${id}`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};
const fetchComments = async (postId: number) => {
	try {
		const response = await fetch(`${GOREST_URL}/posts/${postId}/comments`);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

export const metadata: Metadata = {
	title: 'Post',
};

const PostDetail = async ({ params }: Props) => {
	const post: Post = await fetchPost(params.id);
	const author: User = await fetchUser(post.user_id);
	const comments: Comment[] = await fetchComments(post.id);

	return (
		<div className="w-full min-h-screen pt-24 py-10 flex flex-col gap-4">
			{/* Detail Post */}
			<div className="p-4 card-neu bg-teal-200">
				<h1 className=" text-2xl font-bold mb-4">{post.title}</h1>
				<p>{post.body}</p>
				<p className="text-right mt-6 font-medium italic">By {author.name}</p>
				<p className="text-right text-[12px] italic">{author.email}</p>
			</div>

			<ListComments comments={comments} />
		</div>
	);
};

export default PostDetail;

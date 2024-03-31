'use client';

import PostCard from '@/components/PostCard';
import { GOREST_URL } from '@/config/config';
import { Post } from '@/types/post';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PostsPage = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(`${GOREST_URL}/posts`, {
					method: 'GET',
				});
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className="w-full pt-24 min-h-screen flex flex-col p-8 gap-6">
			<h1 className=" text-2xl font-bold">Posts</h1>
			<div className=" w-full grid grid-cols-1 gap-6">
				{posts.map((post: Post) => {
					return (
						<Link key={post.id} href={`/posts/${post.id}`}>
							<PostCard post={post} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default PostsPage;

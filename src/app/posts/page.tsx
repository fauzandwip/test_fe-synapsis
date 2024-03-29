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
				const response = await fetch(`${GOREST_URL}/posts`);
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<div className=" w-full min-h-screen bg-gray-300 flex flex-col gap-8 p-8">
			{posts.map((post: Post) => {
				return (
					<Link key={post.id} href={`/posts/${post.id}`}>
						<PostCard post={post} />
					</Link>
				);
			})}
		</div>
	);
};

export default PostsPage;

'use client';

import Pagination from '@/components/Pagination';
import PostCard from '@/components/PostCard';
import { GOREST_URL } from '@/config/config';
import { Post } from '@/types/post';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PostsPage = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState(1);
	const [per_page, setPer_page] = useState(20);

	const fetchPosts = async () => {
		try {
			const response = await fetch(
				`${GOREST_URL}/posts?page=${page}&per_page=${per_page}`,
				{
					method: 'GET',
				}
			);
			const data = await response.json();
			const totalUsers = response.headers.get('X-Pagination-Total');
			if (totalUsers) {
				const totalPages = Math.ceil(+totalUsers / per_page);
				setTotalPage(totalPages);
			}
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [page]);

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
			{/* pagination */}
			<Pagination page={page} totalPage={totalPage} setPage={setPage} />
		</div>
	);
};

export default PostsPage;

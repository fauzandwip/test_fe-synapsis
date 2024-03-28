'use client';

import UserCard from '@/components/UserCard';
import { GOREST_URL } from '@/config/config';
import { User } from '@/types/user';
import React, { useEffect, useState } from 'react';

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(`${GOREST_URL}/users`);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUsers();
	}, []);

	return (
		<div className=" w-full min-h-screen bg-gray-300 flex flex-col gap-8 p-8">
			{users.map((user: User) => {
				return <UserCard key={user.id} user={user} />;
			})}
		</div>
	);
};

export default UsersPage;

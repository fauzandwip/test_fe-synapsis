'use client';

import FormUser from '@/components/FormUser';
import UserCard from '@/components/UserCard';
import IconPlus from '@/components/icons/IconPlus';
import { GOREST_URL } from '@/config/config';
import { User } from '@/types/user';
import React, { useEffect, useState } from 'react';

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [showAddForm, setShowAddForm] = useState(false);

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

	const toggleShowForm = () => {
		setShowAddForm((prev) => (prev ? false : true));
	};

	return (
		<div className=" w-full min-h-screen bg-gray-300 p-8 relative">
			<div className="p-4 flex justify-end">
				<button
					onClick={toggleShowForm}
					className=" w-max p-2 bg-blue-800 rounded-full hover:bg-blue-900 active:bg-blue-950 active:scale-95 transition-transform"
				>
					<IconPlus width={'2em'} height={'2em'} className="text-slate-100" />
				</button>
			</div>
			<div className=" flex flex-col gap-6">
				{users.map((user: User) => {
					return <UserCard key={user.id} user={user} />;
				})}
			</div>

			{/* add form */}
			{showAddForm && <FormUser toggleShowForm={toggleShowForm} />}
		</div>
	);
};

export default UsersPage;

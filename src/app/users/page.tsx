'use client';

import FormUser from '@/components/FormUser';
import UserCard from '@/components/UserCard';
import IconPlus from '@/components/icons/IconPlus';
import { GOREST_URL } from '@/config/config';
import { User } from '@/types/user';
import React, { FormEvent, useEffect, useState } from 'react';

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState<User>({
		id: 0,
		name: '',
		email: '',
		gender: '',
		status: '',
	});
	const [showAddForm, setShowAddForm] = useState(false);
	const [showEditForm, setshowEditForm] = useState(false);

	const fetchUsers = async () => {
		try {
			const headers = new Headers();
			headers.append(
				'Authorization',
				`Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`
			);
			const response = await fetch(`${GOREST_URL}/users`, {
				headers,
			});
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const toggleShowAddForm = () => {
		setShowAddForm((prev) => (prev ? false : true));
	};
	const toggleShowEditForm = () => {
		setshowEditForm((prev) => (prev ? false : true));
	};

	const handleOnClickEditButton = (user: User) => {
		setCurrentUser(user);
		toggleShowEditForm();
	};

	const onChangeCurrentUser = (field: string, value: string) => {
		setCurrentUser((prev) => ({ ...prev, [field]: value }));
	};

	const handleOnSubmitAdd = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			const headers = new Headers();
			headers.append(
				'Authorization',
				`Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`
			);
			const response = await fetch(GOREST_URL + '/users', {
				method: 'POST',
				body: formData,
				headers,
			});
			// console.log(await response.json(), 'ADD');
			toggleShowAddForm();
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('trigerr submit EDIT');

		try {
			const formData = new FormData(e.currentTarget);
			const headers = new Headers();
			headers.append(
				'Authorization',
				`Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`
			);
			// console.log(formData.get('name'));
			const response = await fetch(GOREST_URL + '/users/' + currentUser.id, {
				method: 'PUT',
				body: formData,
				headers,
			});
			// console.log(await response.json(), 'EDIT');
			toggleShowEditForm();
			fetchUsers();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=" w-full min-h-screen bg-gray-300 p-8 relative">
			<div className="p-4 flex justify-end">
				<button
					onClick={toggleShowAddForm}
					className=" w-max p-2 bg-blue-800 rounded-full hover:bg-blue-900 active:bg-blue-950 active:scale-95 transition-transform"
				>
					<IconPlus width={'2em'} height={'2em'} className="text-slate-100" />
				</button>
			</div>
			<div className=" flex flex-col gap-6">
				{users.map((user: User) => {
					return (
						<UserCard
							key={user.id}
							user={user}
							onClickEditButton={() => handleOnClickEditButton(user)}
						/>
					);
				})}
			</div>

			{/* add form */}
			{showAddForm && (
				<FormUser
					title="Add"
					toggleShowForm={toggleShowAddForm}
					onChangeUser={() => null}
					onSubmit={handleOnSubmitAdd}
				/>
			)}

			{/* edit form */}
			{showEditForm && (
				<FormUser
					onChangeUser={onChangeCurrentUser}
					user={currentUser}
					title="Edit"
					toggleShowForm={toggleShowEditForm}
					onSubmit={handleOnSubmitEdit}
				/>
			)}
		</div>
	);
};

export default UsersPage;

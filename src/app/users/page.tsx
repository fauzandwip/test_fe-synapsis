'use client';

import FormUser from '@/components/form/FormUser';
import UserCard from '@/components/UserCard';
import IconPlus from '@/components/icons/IconPlus';
import { GOREST_URL } from '@/config/config';
import { User } from '@/types/user';
import React, { FormEvent, useEffect, useState } from 'react';
import { setTimeout } from 'timers';
import Pagination from '@/components/Pagination';

const UsersPage = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState<User>({
		id: 0,
		name: '',
		email: '',
		gender: '',
		status: '',
	});
	const [search, setSearch] = useState('');
	const [showAddForm, setShowAddForm] = useState(false);
	const [showEditForm, setshowEditForm] = useState(false);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState(1);
	const [per_page, setPer_page] = useState(5);

	const fetchUsers = async () => {
		try {
			const response = await fetch(
				`${GOREST_URL}/users?name=${search}&page=${page}&per_page=${per_page}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`,
					},
				}
			);
			const totalUsers = await response.headers.get('X-Pagination-Total');
			if (totalUsers) {
				const totalPages = Math.ceil(+totalUsers / per_page);
				setPage((prev) => (prev > totalPages ? 1 : prev));
				setTotalPage(totalPages);
			}

			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, [search, page]);

	const onChangeCurrentUser = (field: string, value: string) => {
		setCurrentUser((prev) => ({ ...prev, [field]: value }));
	};

	// toggle form
	const toggleShowAddForm = () => {
		setShowAddForm((prev) => (prev ? false : true));
	};
	const toggleShowEditForm = () => {
		setshowEditForm((prev) => (prev ? false : true));
	};

	// actions button
	const handleOnClickEditButton = (user: User) => {
		setCurrentUser(user);
		toggleShowEditForm();
	};
	const handleOnClickDeleteButton = async (userId: number) => {
		try {
			await fetch(GOREST_URL + '/users/' + userId, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`,
				},
			});
			fetchUsers();
		} catch (error) {
			console.log(error);
		}
	};

	// submit form
	const handleOnSubmitAdd = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			await fetch(GOREST_URL + '/users', {
				method: 'POST',
				body: formData,
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`,
				},
			});
			toggleShowAddForm();
			fetchUsers();
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnSubmitEdit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const formData = new FormData(e.currentTarget);
			await fetch(GOREST_URL + '/users/' + currentUser.id, {
				method: 'PUT',
				body: formData,
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`,
				},
			});
			toggleShowEditForm();
			fetchUsers();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=" w-full min-h-screen bg-gray-300 p-8 relative flex flex-col">
			<div className="p-4 flex justify-end items-center gap-2 ">
				<div className="w-full p-2">
					<input
						onChange={async (e) => {
							setTimeout(() => {
								setSearch(e.target.value);
							}, 600);
						}}
						type="text"
						name="search"
						id="search"
						className="w-full px-4 py-2 rounded-lg border-2 border-black shadow-neu outline-none focus:bg-lime-500 bg-white focus:placeholder-slate-200 placeholder-slate-400"
						placeholder="search by name"
					/>
				</div>
				<button
					onClick={toggleShowAddForm}
					className="p-2 h-max bg-blue-800 rounded-full hover:bg-blue-900 active:bg-blue-950 active:scale-95 transition-transform"
				>
					<IconPlus width={'2em'} height={'2em'} className="text-slate-100" />
				</button>
			</div>
			<div className=" flex flex-col gap-6 flex-grow py-4">
				{users.map((user: User) => {
					return (
						<UserCard
							key={user.id}
							user={user}
							onClickEditButton={() => handleOnClickEditButton(user)}
							onClickDeleteButton={() => handleOnClickDeleteButton(user.id)}
						/>
					);
				})}
			</div>
			{/* pagination */}
			<Pagination page={page} totalPage={totalPage} setPage={setPage} />

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

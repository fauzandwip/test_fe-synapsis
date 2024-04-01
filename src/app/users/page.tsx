'use client';

import FormUser from '@/components/form/FormUser';
import UserCard from '@/components/UserCard';
import IconPlus from '@/components/icons/IconPlus';
import { GOREST_URL } from '@/config/config';
import { User } from '@/types/user';
import React, { FormEvent, useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';
import UsersLoading from '@/components/loading/UsersLoading';

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
	const [per_page, setPer_page] = useState(20);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUsers = async () => {
		try {
			setIsLoading(true);
			const response = await fetch(
				`${GOREST_URL}/users?name=${search}&page=${page}&per_page=${per_page}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_GOREST_ACCESS_TOKEN}`,
					},
				}
			);
			const totalUsers = response.headers.get('X-Pagination-Total');
			if (totalUsers) {
				const totalPages = Math.ceil(+totalUsers / per_page);
				setPage((prev) => (prev > totalPages ? 1 : prev));
				setTotalPage(totalPages);
			}

			const data = await response.json();
			setUsers(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
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
		<div
			className={`w-full min-h-screen pt-24 flex flex-col items-center ${
				showAddForm || showEditForm ? ' h-screen overflow-hidden' : ''
			}`}
		>
			<h1 className=" text-2xl font-bold text-left w-full">User</h1>
			<div className="p-4 flex justify-end items-center gap-2 w-full md:w-3/4">
				<SearchBar setSearch={setSearch} />
				{/* add button */}
				<button
					onClick={toggleShowAddForm}
					className="p-2 h-max bg-blue-800 rounded-full hover:bg-blue-900 active:bg-blue-950 active:scale-95 transition-transform"
				>
					<IconPlus width={'2em'} height={'2em'} className="text-slate-100" />
				</button>
			</div>
			{/* user lists */}
			{isLoading ? (
				<>
					<UsersLoading />
					<Pagination page={page} totalPage={totalPage} setPage={setPage} />
				</>
			) : (
				<>
					<div
						className={`w-full grid grid-cols-1 md:grid-cols-2 grow gap-6 py-4 `}
					>
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
				</>
			)}

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

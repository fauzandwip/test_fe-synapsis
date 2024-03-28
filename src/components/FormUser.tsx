import React, { FormEvent, useState } from 'react';
import Input from './Input';
import Select from './Select';
import IconPlus from './icons/IconPlus';
import { GOREST_URL } from '@/config/config';

type Props = {
	// showForm: boolean;
	toggleShowForm: () => void;
};

const FormUser = ({ toggleShowForm }: Props) => {
	const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
			// console.log(await response.json());

			toggleShowForm();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			onMouseDown={(e) => {
				e.stopPropagation();
				toggleShowForm();
			}}
			className="w-full min-h-screen bg-gray-500/50 absolute top-0 left-0 flex justify-center items-center p-8 backdrop-blur-sm"
		>
			<form
				onMouseDown={(e) => e.stopPropagation()}
				onSubmit={handleOnSubmit}
				action=""
				className="w-full bg-lime-400 px-8 py-12 rounded-lg border-2 border-black shadow-neu flex flex-col gap-3"
			>
				<h1 className=" text-2xl font-bold text-center mb-4">Add User</h1>
				<Input
					labelText="Name"
					id="name"
					type="text"
					placeholder="name"
					required
				/>
				<Input
					labelText="Email"
					id="email"
					type="email"
					placeholder="email@gmail.com"
					required
				/>
				<Select
					labelText="Gender"
					id="gender"
					data={[
						['male', 'Male'],
						['female', 'Female'],
					]}
				/>
				<Select
					labelText="Status"
					id="status"
					data={[
						['active', 'Active'],
						['inactive', 'Inactive'],
					]}
				/>
				<div className="flex justify-end gap-4 px-2">
					<input
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							toggleShowForm();
						}}
						type="submit"
						value={'Cancel'}
						className="bg-red-600 text-slate-50 py-2 px-8 rounded-lg shadow-neu mt-6 w-full font-semibold hover:bg-red-500 active:bg-red-600 active:scale-95 transition-transform"
					/>
					<input
						type="submit"
						value="Add"
						className="bg-blue-800 text-slate-50 py-2 px-8 rounded-lg shadow-neu mt-6 w-full font-semibold hover:bg-blue-600 active:bg-blue-800 active:translate-x-[2.5px] active:translate-y-[2.5px] active:shadow transition-transform"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormUser;

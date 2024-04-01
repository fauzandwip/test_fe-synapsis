import React, { FormEvent } from 'react';
import Input from './Input';
import Select from './Select';
import { User } from '@/types/user';

type Props = {
	title: string;
	user?: User;
	toggleShowForm: () => void;
	onChangeUser: (field: string, value: string) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const FormUser = ({
	title,
	user,
	toggleShowForm,
	onChangeUser,
	onSubmit,
}: Props) => {
	return (
		<div
			onMouseDown={(e) => {
				e.stopPropagation();
				toggleShowForm();
			}}
			className="w-full min-h-screen bg-gray-500/50 absolute top-0 left-0 flex justify-center items-center p-8 backdrop-blur-sm z-30"
		>
			<form
				onMouseDown={(e) => e.stopPropagation()}
				onSubmit={onSubmit}
				action=""
				className="w-full md:w-3/4 lg:w-1/2 bg-teal-300 px-8 py-12 card-neu flex flex-col gap-3"
			>
				<h1 className=" text-2xl font-bold text-center mb-4">{title} User</h1>
				<Input
					labelText="Name"
					id="name"
					type="text"
					placeholder="name"
					required
					value={user?.name}
					onChange={(e) => onChangeUser('name', e.target.value)}
				/>
				<Input
					labelText="Email"
					id="email"
					type="email"
					placeholder="email@gmail.com"
					required
					value={user?.email}
					onChange={(e) => onChangeUser('email', e.target.value)}
				/>
				<Select
					value={user?.gender}
					onChange={(e) => onChangeUser('gender', e.target.value)}
					labelText="Gender"
					id="gender"
					data={[
						['male', 'Male'],
						['female', 'Female'],
					]}
				/>
				<Select
					value={user?.status}
					onChange={(e) => onChangeUser('status', e.target.value)}
					labelText="Status"
					id="status"
					data={[
						['active', 'Active'],
						['inactive', 'Inactive'],
					]}
				/>
				<div className="flex justify-end gap-4 px-2">
					<input
						type="submit"
						value={title}
						className="bg-blue-800 text-slate-50 py-2 px-8 rounded-lg shadow-neu mt-6 w-full font-semibold hover:bg-blue-600 active:bg-blue-800 btn-press"
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							toggleShowForm();
						}}
						className="bg-red-600 text-slate-50 py-2 px-8 rounded-lg shadow-neu mt-6 w-full font-semibold hover:bg-red-500 active:bg-red-600 btn-press"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormUser;
